

interface ContainerProps {
    children: React.ReactNode;
    clazzes?: string
}

function Container({ children, clazzes }: ContainerProps) {
    return <div className={`md:max-w-[1100px] m-auto ${clazzes}`}>
        <div className="md:max-w-[600px] m-auto">
            {children}
        </div>
    </div>
}

export default Container;