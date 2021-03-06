import React, {Component} from 'react';
import TaskItem from "./TaskItem";

class TaskList extends Component {



    render() {
        var {sendTask}=this.props;
        var elemTaskItem= sendTask.map((task,index)=>{
            return   <TaskItem
                TaskItem={task}
                key={task.id}
                index={index}
                updateStatus={this.props.updateStatus}
                delete={this.props.delete}
                onUpdateEdit={this.props.onUpdateList}
            />
        })
        return (
            <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table className="table table-bordered table-hover">
                        <thead>
                        <tr>
                            <th className="text-center">STT</th>
                            <th className="text-center">Tên</th>
                            <th className="text-center">Trạng Thái</th>
                            <th className="text-center">Hành Động</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td></td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="filterName"


                                />
                            </td>
                            <td>
                                <select
                                    className="form-control"
                                    name="filterStatus"


                                >
                                    <option value={-1}>Tất Cả</option>
                                    <option value={0}>Ẩn</option>
                                    <option value={1}>Kích Hoạt</option>
                                </select>
                            </td>
                            <td></td>
                        </tr>
                        {elemTaskItem}


                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default TaskList;