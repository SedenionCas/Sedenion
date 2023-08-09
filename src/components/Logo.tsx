import imgUrl from "/LogoS.svg?url";

export default function Logo() {
    return (
        <span>
            <img src={imgUrl} alt="S" className="h-14 w-14" />
        </span>
    );
}
