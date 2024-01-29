import { usePocketbase } from "../../components/PocketbaseProvider";
import PocketBase, { RecordService } from "pocketbase";


export const pbClienttest = new PocketBase("https://projekt-linn.pockethost.io");
pbClienttest.autoCancellation(false);
//sätt för att få table genom function
export async function getEx() {
    return await pbClienttest.collection("test").getFullList();
}
/*
exempel för använding 
    setEx({ key, value })
*/
export async function setEx(args){
    const data = {key: args.key, value: args.value, completed: args.completed};
    pbClienttest.collection("test").create(data);
}


/*
exempel för användning 
 {resp.map((task) => (
    <div>
        <input type="checkbox" onClick={() => deleteEx(task.id)}></input>
        <h1>
        {task.key} : {task.value}
        </h1>
    </div>
*/
export async function deleteEx(id) {
    let confirm = window.confirm("are you sure");
    if(!confirm){
        return;
    }
    await pbClienttest.collection("test").delete(id);
    window.location.reload();
}

//för att updatera
export async function editEx(args){
    const data = {key: args.key, value: args.value};
    await pbClienttest.collection("test").update(args.id, data);
    window.location.reload();
}


/*
code used above return statement:
  const [resp, setResp] = useState([]);
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const handleSubmit = () => {
    if (key !== "" && value !== "") setEx({ key, value });
    else console.log("invalid input");
  };

    useEffect(() => {
    getEx().then((res) => {
      console.log(res);
      setResp(res);
    });
  }, []);

Code that was used for testing the functions with return

{resp.map((task) => (
        <div>
          <input type="checkbox" onClick={() => deleteEx(task.id)}></input>
          <h1>
            {task.key} : {task.value}
            <button
              onClick={() => editEx({ id: task.id, key: key, value: value })}
            >
              update
            </button>
          </h1>
        </div>
      ))}
      <h1>Create task</h1>
      <input
        type="text"
        placeholder="Key:"
        onChange={(e) => setKey(e.target.value)}
        value={key}
      ></input>
      <input
        type="text"
        placeholder="Value:"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      ></input>
      <button onClick={handleSubmit}>send to DB</button>
*/
