import {Link} from "react-router";

const Header = () => {
    return (
        <>
            <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                <a href={""} className="text-lg font-bold text-gray-900">
                    31КН-QRCode
                </a>

                <div className="flex items-center gap-3">
                    <Link
                        to={"/login"}
                        className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium transition-colors"
                    >
                        Вхід
                    </Link>
                    <Link
                        to={"/register"}
                        className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 text-sm font-medium transition-colors"
                    >
                        Реєстрація
                    </Link>
                </div>
            </header>
        </>
    )
};

export default Header;