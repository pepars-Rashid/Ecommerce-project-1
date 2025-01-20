
const Gridlayout= ({children, className}) => {
  return (
    <div className={`grid w-full auto-rows-max ${className}`}>
      {children}
    </div>
  )
}

const Cardlayout = ({children, className}) =>{
  return(
    <div 
      className={`flex flex-col justify-between rounded-xl ${className}`}
    >
      {children}
    </div>
  )}

export {Gridlayout, Cardlayout}