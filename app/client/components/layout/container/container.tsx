

interface ContainerProps {
    children: React.ReactNode;
}

function Container({ children }: ContainerProps) {
    return <div className="md:max-w-[1100px] m-auto">
        <div className="md:max-w-[600px] m-auto">
            {children}
        </div>
    </div>
}

export default Container;