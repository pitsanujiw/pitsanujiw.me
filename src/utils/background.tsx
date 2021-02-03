export const Background = ({children}: any) => {
    return (
        // className = "bg-grey-300 dark:bg-white transition-all"
        // Remove transition-all to disable the background color transition.
        <div >
            {children}
        </div>
    )
}