export const Button = ({name, onClick}) =>{

    const handleClick = () =>{
        if(onClick !== undefined){
            onClick()
        }
    }

    return(
        <div 
        className="button" 
        onClick={handleClick}
        >
            {name}
        </div>
    );
}