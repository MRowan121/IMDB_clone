import Image from "next/image"
import HeaderIcon from "./HeaderIcon"
import { 
    FaHome,
    FaUser, 
    FaPhoneAlt, 
    FaInfoCircle
} from 'react-icons/fa'

const Header = () => {
    return (
        <div>
            <div className="">
                <HeaderIcon Icon={FaHome} title="HOME" />
                <HeaderIcon Icon={FaUser} title="ACCOUNT" />
                <HeaderIcon Icon={FaPhoneAlt} title="CONTACT" />
                <HeaderIcon Icon={FaInfoCircle} title="ABOUT" />
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