import { Col, Row } from "antd";
import { useGetNewTodosQuery } from '../../api/todoAPI';
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { SingleTodo } from '../Todos/SingleTodo';

export const NewTask = () => {

    const { data: newtodos, isLoading, isSuccess, isError, error } = useGetNewTodosQuery();
    return (
        <>
            <Header />
            <Row>
                <Col span={4}>
                    <Sidebar />
                </Col>
                <Col span={20}>
                    {isLoading && (<p>Loading.......</p>)}
                    {isSuccess && (<Row className="gutter-box"
                        style={{ marginTop: "80px" }}
                    >

                        {newtodos.length > 0 ? newtodos?.map((todo, index) => (
                            <SingleTodo key={index} todo={todo} />
                        )) : (<p>No todos found</p>)}
                    </Row>)}
                </Col>
            </Row></>
    )
}

