type ButtonProps = {
    onClick: () => void,
    btName: string
    text: string
}

export default function Button(props: ButtonProps) {
    return (
        <button onClick={props.onClick} name={props.btName}>{props.text}</button>

    )
}