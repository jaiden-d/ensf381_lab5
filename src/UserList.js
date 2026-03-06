import users from './users';

function UserList() {
    return users.map(function(item){
        return (
            <article>
                <h3>{item.first_name}</h3>
                <p>User Group: {item.user_group}</p>
                <p>ID: {item.id}</p>
            </article>
        );
    });  
}

export default UserList;