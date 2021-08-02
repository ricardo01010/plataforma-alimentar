function Tempo(){
    const dynamicDate = new Date;
    const dynamicDateString = dynamicDate.toGMTString();

    return(
        <div>
            {dynamicDate} (dinamico)
        </div>
        
    )
}

export default Tempo