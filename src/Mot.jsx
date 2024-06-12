import{useState} from "react";
import axios from "axios";

function Mot(){
    const [msg,setMsg] = useState();
    const gm = (event) => {
        event.preventDefault();
        let url = "https://api.quotable.io/random";
        axios.get(url)
        .then(res => {
            setMsg(res.data.content);
        })
        .catch(err => setMsg("issue " + err));
    }

    return(
        <>
        <center>
            <div class="div">
            <h1>Motivation App</h1>
            <form onSubmit={gm}>
                <input type="submit" value="Get Msg" class="btn" />
            </form>
            <h2>{msg}</h2>
            </div>
        </center>
        </>
    );
}

export default Mot;