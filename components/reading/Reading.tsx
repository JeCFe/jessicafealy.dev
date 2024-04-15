import { Spinner } from "@jecfe/react-design-system";
import { useEffect, useState } from "react";
import Image from "next/image";

export function Reading({
  id,
  title,
  year,
}: {
  id: number;
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
          `https://covers.openlibrary.org/b/id/${id}-M.jpg`,
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch image: ${response.status}`);
        }
        const blob = await response.blob();
        setImage(URL.createObjectURL(blob));
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
          <Image
            alt={title}
            src={image ?? ""}
            width={48}
            height={48}
            className="h-[256px] w-[180px] rounded border-4 border-transparent shadow glow:border-pink-500 glow:shadow-2xl glow:shadow-cyan-500"
          />
        )}
      </div>
      <div className="min-h-max pb-20 text-lg">
        <div className="text-lg font-bold">{title}</div>
        <div className="text-gray- text-sm">{year}</div>
      </div>
    </div>
  );
}
