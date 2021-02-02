export const Background = ({children}: any) => {
    return (
        // Remove transition-all to disable the background color transition.
        <div className="bg-grey-300 dark:bg-black transition-all">
            {children}
        </div>
    )
}