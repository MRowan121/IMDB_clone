import Image from "next/image"
import HeaderIcon from "./HeaderIcon"

const Header = () => {
    return (
        <div>
            <div className="">
                <HeaderIcon />
            </div>
            <Image 
                src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
                alt="imdb-logo"
                width={100}
                height={100}
            />
        </div>
    )
}

export default Header