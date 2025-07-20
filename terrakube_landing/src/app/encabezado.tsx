import Image from "next/image";


export default function Encabezado() {
    return (
        <header>
            <div className="contenedorLogoTexto">
                <Image
                    className="logo"
                    src="/terrakube.png"
                    alt="terrakube logo"
                    width={47}
                    height={45}
                    priority

                />
                <h1 className="textoEncabezado">Terrakube</h1>
            </div>

            <div className="flex gap-4 items-center flex-col sm:flex-row">
                <a
                    className="header-button"
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    Documentation
                </a>

                <a
                    className="header-button"
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    GitHub Repo
                </a>

                <a
                    className="header-button"
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    Join our Slack
                </a>

            </div>

        </header>

    );
}