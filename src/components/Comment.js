import { useState, useRef, useEffect } from "react";
import Action from "./Action";
import { ReactComponent as DownArrow } from "../assets/down-arrow.svg";
import { ReactComponent as UpArrow } from "../assets/up-arrow.svg";
import { ReactComponent as Profile} from "../assets/profile.svg";
import { ReactComponent as DIcon} from "../assets/delete.svg";
import { ReactComponent as Eicon} from "../assets/edit.svg";
import { ReactComponent as Cscore1} from "../assets/icon-minus.svg";
import { ReactComponent as Cscore} from "../assets/icon-plus.svg";

const Comment = ({
  handleInsertNode,
  handleEditNode,
  handleDeleteNode,
  comment,
}) => {
  const [input, setInput] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [expand, setExpand] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, [editMode]);

  const handleNewComment = () => {
    setExpand(!expand);
    setShowInput(true);
  };

  const onAddComment = () => {
    if (editMode) {
      handleEditNode(comment.id, inputRef?.current?.innerText);
    } else {
      setExpand(true);
      handleInsertNode(comment.id, input);
      setShowInput(false);
      setInput("");
    }

    if (editMode) setEditMode(false);
  };

  const handleDelete = () => {
    handleDeleteNode(comment.id);
  };

  return (
    <div className=" p-1 m-0  ml-5  w-auto ">
      <div 
       
      className={comment.id === 1 ? "inputContainer p-2 m-0   flex flex-wrap  ml-52 mr-52  h-2 absolute inset-x-0 bottom-44 " : "commentContainer mt-6 flex flex-col p-2  cursor-pointer rounded-md bg-white hover:bg-slate-200 w-auto  " }
      >
        {comment.id === 1 ? (
          <>
          <div className="pro flex items-stretch m-12 ml-0.5 bg-white w-dvw rounded-md">
          
          <Profile  className="profile w-10 h-20 mr-5 ml-5 m-6 "/> 
            <input
            
              type="text"
              className="inputContainer__input first_input bg-white p-1 m-8 text-sm text-zinc-500 rounded-md border-solid border-black border-2 cursor-pointer justify-between items-center flex hover:bg-slate-200 w-96"
              autoFocus
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Add a Comment...."
            />

            <Action
              className="send comment bg-blue-600 p-3 m-8 text-xs rounded-md text-slate-100 hover:bg-blue-300 text-justify content-center h-12 " 
              type="SEND"
              handleClick={onAddComment}
            />
            </div>
          </>
        ) : (
          <>
          
          <div className="Details text-sm flex gap-x-8  hover:bg-slate-200  relative">

          <div className="Cscore1 bg-slate-200 m-1 p-1 w-10 ">
                <Cscore1 className="score-control score-plus w-5 h-5 mr-2 mt-2 ml-1"/>
                <p class="Cscore2-number ml-1 text-blue-800 font-bold"> 5 </p>
                <Cscore className="score-control score-minus w-5 h-5 mr-2 mt-3 ml-0.5"/>
              </div>
          
            <Profile className="profile w-10 h-10 mr-2 "/>
              <h1 className="name font-bold m">Liza </h1>
              <h2 className="time text-xs italic "> NOW</h2>
    
         
          <Action
         
                    className="reply1 text-blue-600 font-bold justify-end flex  mr-0 text-sm rounded-md mb-10 ml-96 "
                    type={
                      <> 
                        {expand ? (
                          <UpArrow className="arrow w-5 h-5 mr-2"
                          
                          />
                        ) : (
                          <DownArrow className="arrow w-5 h-5 mr-2" />
                        )}{" "}
                        REPLY
                      </>
                    }
                    handleClick={handleNewComment}
                  />

                  <div className="dele flex items-stretch ">
                <DIcon className="deleic w-5 h-4 p-  ml-20 "/>
              
         
                <Action
                    className="reply2 ml-0 text-sm p-0 rounded-md  text-red-700 font-bold "
                    type="DELETE"
                    handleClick={handleDelete}
                  />
                    </div>

                    <div className="dele flex items-stretch ">
                    <Eicon className="edic w-6 h-5 p-0  ml-20 "/>

                  <Action
                 
                    className="reply1 ml-0 text-sm   p-0 rounded-md  text-blue-800 font-bold "
                    
                    type="EDIT"
                   
                    handleClick={() => {
                      setEditMode(true);
                    }}
                  />
                  </div>
                  
      </div>
      
            <span className="textinput bg-white rounded-md break-words p-1 ml-14 hover:bg-slate-200 "
              contentEditable={editMode}
              suppressContentEditableWarning={editMode}
              ref={inputRef}
            >
              {comment.name}
              
            </span>

            

            <div  className="buttons2 flex-wrap items-center mt-2 border-gray-950 rounded-md ml-80 "
           
            >
              {editMode ? (
                <>
                  <Action
                    className="reply1 ml-16 text-sm p-2 bg-white rounded-md hover:bg-blue-200"
                    type="SAVE"
                    handleClick={onAddComment}
                  />
                  <Action
                    className="reply1 ml-16 text-sm p-2 bg-white rounded-md hover:bg-red-200"
                    type="CANCEL"
                    handleClick={() => {
                      if (inputRef.current)
                        inputRef.current.innerText = comment.name;
                      setEditMode(false);
                    }}
                  />
                </>
              ) : (
                <>
                 
                </>
              )}
              
            </div>
          </>
        )}

        
      </div>

      {/* <div style={{ display: expand ? "block" : "none", paddingLeft:20 ,scrollmargininline: "20px"}}> */}
      <div className="box pl-5 block static ">
        {showInput && (
          <div className="pro flex items-stretch bg-white m-6 rounded-md ">
          
          <Profile  className="profile w-24 h-24 mr-5 ml-5 m-6 "/> 
          <div className="inputContainer bg-white">
            <input
              type="text"
             
              
              className="inputContainer__input first_input bg-white p-10 m-6 text-sm text-zinc-500 rounded-md border-solid border-black border-2 cursor-pointer justify-between items-center flex hover:bg-slate-200 w-96"autoFocus
              onChange={(e) => setInput(e.target.value)}
              placeholder="Add a Reply Comment...."
            />

            <Action className="reply  bg-white p-3 ml-1 text-xs rounded-md hover:bg-blue-200 flex flex-wrap" type="REPLY" handleClick={onAddComment} />
            <Action
              className="reply bg-white ml-1 p-3  text-xs rounded-md hover:bg-red-200 flex flex-wrap "
              type="CANCEL"
              handleClick={() => {
                setShowInput(false);
                if (!comment?.items?.length) setExpand(false);
              }}
            />
            </div>


            
          </div>
          
        )}
        

        {comment?.items?.map((cmnt) => {
          return (
            <Comment
              key={cmnt.id}
              handleInsertNode={handleInsertNode}
              handleEditNode={handleEditNode}
              handleDeleteNode={handleDeleteNode}
              comment={cmnt}
            />
          );
        })}

        
      </div>


      
    </div>
  );
};

export default Comment;
