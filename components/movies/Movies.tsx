import { Spinner } from "@jecfe/react-design-system";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Glow } from "@codaworks/react-glow";

export function Movies({
  id,
  title,
  year,
}: {
  id: string;
  title: string;
  year: number;
}) {
  const [image, setImage] = useState<string | undefined>(undefined);

  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);

    const fetchImage = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_KEY as string}&i=${id}`,
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch image: ${response.status}`);
        }

        const blob = await response.json();
        setImage(blob.Poster);
        return blob.Poster;
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    fetchImage();
  }, [id]);

  return (
    <div className="flex w-auto max-w-[168px] flex-col">
      <div className="w-max">
        {loading || image === undefined ? (
          <Spinner />
        ) : (
          <Glow>
            <Image
              alt={title}
              src={image ?? ""}
              width={48}
              height={48}
              className="h-[256px] w-[180px] rounded border-4 border-transparent shadow glow:border-pink-500 glow:shadow-2xl glow:shadow-cyan-500"
            />
          </Glow>
        )}
      </div>
      <div className="min-h-max text-lg">
        <div className="text-ellipsis text-lg font-bold">{title}</div>
        <div className="text-gray- text-sm">{year}</div>
      </div>
    </div>
  );
}
