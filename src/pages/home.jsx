import { getQueryResult } from '../util/helpers';

function Home() {
    return ( <>
    <div onClick={()=>{
        getQueryResult().then(res =>{
            console.log(res);
        })
    }}>
click me
    </div>
    </> );
}

export default Home;