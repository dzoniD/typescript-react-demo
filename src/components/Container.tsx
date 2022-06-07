type ContainerProps = {
    styles: React.CSSProperties // css type

}


export const Container  = (props: ContainerProps) => {
    return (
        <div style={props.styles}>
            Text content goes here
        </div>
    )
}