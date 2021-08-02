function Tempo(props){
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();
    console.log('>>>>>>>>>>>>>>>>>>>>>>>> dinamico');

    return(
        <div>
            <div>{dynamicDateString} (dinamico)</div>
            <div>{props.staticDateString} (estático)</div>
        </div>
        
    )
}

export async function getStaticProps(){
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();
    console.log('>>>>>>>>>>>>>>>>>>>>>>>> static');
    return{
        props: {
            staticDateString
        },
        revalidate: 1
    }
}


const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export default Tempo