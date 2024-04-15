import { Glow } from "@codaworks/react-glow";
import { NavArrow, Reading } from "..";
import { Movies } from "../movies";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { Spinner } from "@jecfe/react-design-system";
export type Media = {
  rank: number;
  id: number;
  show: Show;
};

export type Show = {
  title: string;
  year: number;
  ids: Id;
};

export type Id = {
  trakt: number;
  imdb: string;
};

type DisplayMedia = {
  title: string;
  year: number;
  id: string;
};

type Work = {
  work: {
    title: string;
    key: string;
    author_keys: string[];
    author_names: string[];
    first_publish_year: number;
    lending_edition_s: null | string;
    edition_key: string[];
    cover_id: number;
    cover_edition_key: null | string;
  };
};

type DisplayBook = {
  title: string;
  year: number;
  authour: string | string[];
  id: number;
};

function getRandomSelection<T>(array: T[], count: number): T[] {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray.slice(0, count);
}

export function AboutMe() {
  const [displayedMedia, setDisplayedMedia] = useState<
    DisplayMedia[] | undefined
  >(undefined);

  const [loadingMovies, setLoadingMovies] = useState<boolean>(false);

  const [displayBooks, setDisplayBooks] = useState<DisplayBook[] | undefined>(
    undefined,
  );

  const [loadingBooks, setLoadingBooks] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoadingMovies(true);
      try {
        const response = await fetch(
          "https://api.trakt.tv/users/jecfe/lists/favourites/items",
          {
            headers: {
              "Content-Type": "application/json",
              "trakt-api-version": "2",
              "trakt-api-key": process.env.NEXT_PUBLIC_TRAKT_KEY as string,
            },
          },
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }

        const data: Media[] = await response.json();
        const processedMedia: DisplayMedia[] = await Promise.all(
          data.map(async (entry) => {
            return {
              title: entry.show.title,
              year: entry.show.year,
              id: entry.show.ids.imdb,
            };
          }),
        );
        setDisplayedMedia(processedMedia);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoadingMovies(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoadingBooks(true);
      try {
        const response = await fetch(
          "https://openlibrary.org/people/jessica_fealy/books/currently-reading.json",
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }

        const data = await response.json();
        const processedBooks = await Promise.all(
          data.reading_log_entries.map(async (entry: Work) => {
            return {
              title: entry.work.title,
              year: entry.work.first_publish_year,
              authour: entry.work.author_names,
              id: entry.work.cover_id,
            };
          }),
        );
        setDisplayBooks(processedBooks);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoadingBooks(false);
      }
    };
    fetchData();
  }, []);

  const randomFourFavs = useMemo(() => {
    if (displayedMedia === undefined) {
      return undefined;
    }
    if (displayedMedia.length <= 3) {
      return displayedMedia;
    }
    const x = getRandomSelection<DisplayMedia>(displayedMedia, 3);
    return x;
  }, [displayedMedia]);

  const randomFourBeingRead = useMemo(() => {
    if (displayBooks === undefined) {
      return undefined;
    }
    if (displayBooks.length <= 3) {
      return displayBooks;
    }
    return getRandomSelection<DisplayBook>(displayBooks, 3);
  }, [displayBooks]);
  return (
    <Glow>
      <div className="w-full justify-center bg-gradient-to-b  from-pink-900 to-slate-900 text-white glow:from-pink-500/50 glow:to-slate-700/50">
        <NavArrow direction="up" id="projects" className="mb-20" />
        <h1
          className="flex w-full flex-row items-center justify-center pb-12 text-center text-5xl md:text-7xl"
          id="about-me"
        >
          About me
        </h1>
        <div className="flex justify-center">TODO: content to go here</div>
        <div className="flex w-full justify-center">
          <div className="container flex w-full flex-col justify-between space-y-8 md:flex-row md:space-y-0">
            <RenderMedia title="Favourite shows">
              {loadingMovies || randomFourFavs === undefined ? (
                <Spinner />
              ) : (
                randomFourFavs.map((x) => (
                  <Movies key={x.id} id={x.id} title={x.title} year={x.year} />
                ))
              )}
            </RenderMedia>

            <RenderMedia title="Currently reading">
              {loadingBooks || randomFourBeingRead === undefined ? (
                <Spinner />
              ) : (
                randomFourBeingRead.map((x) => (
                  <Reading key={x.id} id={x.id} year={x.year} title={x.title} />
                ))
              )}
            </RenderMedia>
          </div>
        </div>
      </div>
    </Glow>
  );
}

function RenderMedia({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex-row text-white">
      <div className="flex items-center justify-center pb-8 text-4xl">
        {title}
      </div>
      <div className="container mx-auto flex flex-row justify-center space-x-8">
        {children}
      </div>
    </div>
  );
}
