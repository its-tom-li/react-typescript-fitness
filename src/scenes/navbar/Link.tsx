import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({
    page,
    selectedPage,
    setSelectedPage
}: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink 
        className={`${selectedPage === lowerCasePage ? "bg-primary-300 rounded-md py-2 px-2" : ""}
            transition duration-500 hover:text-white hover:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
        `}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
    >
        { page }
    </AnchorLink>
  )
}

export default Link