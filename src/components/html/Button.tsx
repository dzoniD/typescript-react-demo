type ButtonProps = {
    variant: 'primary' | 'secondary'
    children: string
} & Omit<React.ComponentProps<'button'>, 'children'>  //omitting props

export const CustomButton = ({variant, children, ...rest}: ButtonProps) => {
    
    return <button className={`class-with-${variant}`} {...rest}>{children}</button>
}