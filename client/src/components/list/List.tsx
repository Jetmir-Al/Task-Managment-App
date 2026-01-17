import NoInfo from "../../utils/NoInfo";

const List = () => {

    const user = ['ss', 'ss'];
    return (
        <div className="table-wrapper">
            <table className="usersTable">
                {
                    user.length === 0 ? (
                        <thead>
                            <tr className="loading-container">
                                <NoInfo noInfo="No task lists here?" />
                            </tr>
                        </thead>
                    ) : (
                        <>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>ww</th>
                                    <th>ww</th>
                                    <th>Role</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {user.map((res, index) => (
                                    <tr key={index} className="user-row">
                                        <td>{res}</td>
                                        <td>{res}</td>
                                        <td>{res}</td>
                                        <td>{res}</td>
                                        <td className='tableBtns'>
                                            <button className="update-btn"
                                            >Update</button>
                                            <button className="delete-btn" >Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </>
                    )
                }
            </table>
        </div>
    );
}

export default List;