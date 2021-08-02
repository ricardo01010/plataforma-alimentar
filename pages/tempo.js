function Tempo(){
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return(
        <div>
            {dynamicDateString} (dinamico)
        </div>
        
    )
}

export default Tempo