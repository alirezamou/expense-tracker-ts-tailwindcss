export type HeaderProps = {
    title: String;
};

export default function Header ({ title } : HeaderProps ) : React.ReactElement {
    return (
    <h2 className="font-bold text-2xl">
        {title}
    </h2>
    )
}