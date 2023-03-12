export const DeleteAllButton = ({deleteList}) => {
    return(
    <button type="submit" onClick={deleteList} className="btn btn-danger mt-3">Delete all</button>
    )
  }