import {
    FacebookLogoIcon,
    InstagramLogoIcon,
    YoutubeLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import family from "../../../public/family.png";
import golden from "../../../public/golden.png";
import natural from "../../../public/natural.png";
import primier from "../../../public/primier.png";
import royal from "../../../public/royal.png";
import whiskas from "../../../public/whiskas.png";

const brands = [
    { name: "Royal Canin", logo: royal },
    { name: "Golden", logo: golden },
    { name: "Primier", logo: primier },
    { name: "Formula Natural", logo: natural },
    { name: "Whiskas", logo: whiskas },
    { name: "Family Plus", logo: family },
];

export function Footer() {
    return (
        <section className="bg-[#B42318] py-16 text-white">
            <div className="container mx-auto px-4">
                <div className="border-b boder-white/20 pb-8">
                    <h2 className="text-3xl font-semibold mb-8 text-center">
                        Marcas que trabalhamos
                    </h2>

                    <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
                        {brands.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-4 rounded-lg flex items-center justify-center "
                            >
                                <Image
                                    src={item.logo}
                                    alt={item.name}
                                    width={100}
                                    height={50}
                                    quality={100}
                                    style={{
                                        width: "auto",
                                        height: "auto",
                                    }}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">
                            Pet Shop Dev
                        </h3>
                        <p className="mb-4">
                            Cuidando do seu melhor amigo com amor e dedicação.
                        </p>
                        <a
                            href={`https://wa.me/5511999999999?text=Oi vim pelo site e gostaria de mais informações`}
                            className="bg-[#15803D] px-4 py-2 rounded-md "
                        >
                            Contato via WhatsApp
                        </a>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-2">
                            Contatos
                        </h3>
                        <p>Email: petshopdev@email.com</p>
                        <p>Telefone: (99) 1234-5678</p>
                        <p>Rua Dois,123, centro, São Paulo | SP</p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-2">
                            Redes Sociais
                        </h3>
                        <div className="flex gap-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                aria-label="Visitar Facebook"
                            >
                                <FacebookLogoIcon className="w-8 h-8" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                aria-label="Visitar Instagram"
                            >
                                <InstagramLogoIcon className="w-8 h-8" />
                            </a>
                            <a
                                href="https://youtube.com"
                                target="_blank"
                                aria-label="Visitar YouTube"
                            >
                                <YoutubeLogoIcon className="w-8 h-8" />
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    );
}
