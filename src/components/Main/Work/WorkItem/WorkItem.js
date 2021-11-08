import './WorkItem.scss'
const WorkItem = (props) => {
    return (
        <div className='work-item'>
            <h3 className='work-item__title'>{props.title}</h3>
            <div className="work-item__content">
                {props.children}
            </div>
        </div>
    );
};

export default WorkItem;
