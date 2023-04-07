import Image from "next/image"
import HeaderIcon from "./HeaderIcon"
import { 
    FaHome,
    FaUser, 
    FaPhoneAlt, 
    FaInfoCircle
} from 'react-icons/fa'
import Link from "next/link"

const Header = () => {
    return (
        <div className="bg-gray-700 text-gray-200 flex flex-col items-center p-6 select-none sm:flex-row justify-between">
            <div className="flex">
                <Link href={'/'} >
                    <HeaderIcon Icon={FaHome} title="HOME" />
                </Link>
                <HeaderIcon Icon={FaUser} title="ACCOUNT" />
                <HeaderIcon Icon={FaPhoneAlt} title="CONTACT" />
                <HeaderIcon Icon={FaInfoCircle} title="ABOUT" />
            </div>
            <Link href={'/'} >
                <Image 
                    src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
                    alt="imdb-logo"
                    width={100}
                    height={100}
                    className="cursor-pointer active:brightness-110"
                />
            </Link>
        </div>
    )
}

export default Header