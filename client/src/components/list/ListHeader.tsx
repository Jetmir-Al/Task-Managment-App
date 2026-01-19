
const ListHeader = ({ priority, category }: { priority: string, category: string }) => {
    return (
        <>
            <thead>
                <tr>
                    <th>Nr</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>{category}</th>
                    <th>Prio~{priority}</th>
                    <th>Actions</th>
                </tr>
            </thead>
        </>
    );
}

export default ListHeader;