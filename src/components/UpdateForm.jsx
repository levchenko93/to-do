const UpdateForm = ({ updateData, updateTask, cancelUpdate, changeHolder }) => {
   return (
      <>
         {/* Update Task */}
         <div className="row">
            <div className="col">
               <input
                  className="form-control form-control-lg"
                  value={updateData && updateData.title}
                  onChange={(e) => changeHolder(e)}
               />
            </div>
            <div className="col-auto">
               <button
                  className="btn btn-lg btn-success mr-20"
                  onClick={updateTask}
               >
                  Update
               </button>
               <button
                  className="btn btn-lg btn-warning"
                  onClick={cancelUpdate}
               >
                  Cancel
               </button>
            </div>
         </div>
         <br />
      </>
   );
};

export default UpdateForm;
