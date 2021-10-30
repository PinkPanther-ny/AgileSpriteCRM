import { useState, createRef } from "react";
import React  from 'react';

const Group = ({ group, contact, setGroup, grouplist }) => {

    const [remainList, setRemainList] = useState([...contact]);

    const [checked, setChecked] = useState([]);

    const [fields, setFields] = useState({ name: "" });

    const [nowGroup, setNowGroup] = useState(null);

    const remain = createRef();


    const [currentGroup, setCurrentGroup] = useState("");

    document.addEventListener("click", () => {
        if (remain.current) remain.current.classList.remove("show")
    })

    const handleShowRemain = (e) => {
        e.stopPropagation();
        remain.current.classList.add("show");
    }

    const handleAddShow = () => {
        setNowGroup("add");
    }

    const handleChange = (e) => {
        setFields({ ...fields, name: e.target.value });
    }

    const handleAdd = () => {
        group.push({
            name: fields.name,
            members: []
        })
        setNowGroup(null);
        setGroup([...group]);
    }

    const renderGroup = () => {
        switch (nowGroup) {
            case null:
                return <img src="/images/Contact front page.png" alt="Contactfrontpage" className="contactimg" />;
            case "add":
                return (
                    <div>
                        GroupName: <input type="text" name="name" value={fields.name} onChange={handleChange} />
                        <button onClick={handleAdd}>Add</button>
                    </div>)
            default:
                return (
                    <div>
                        <h4 align="center" style={{ backgroundColor: "rgb(150, 150, 150)", padding: "10px 0", color: "white" }}>Detail</h4>
                        <hr />
                        <h4>Name: {nowGroup.name}</h4>
                        <h4>Description</h4>
                        <div style={{ textAlign: "center" }}>
                            <textarea name="" id="" cols="100" rows="10"></textarea>
                        </div>
                        <h4>Members</h4>
                        <div>
                            {nowGroup.members.map((item, index) => <h5 key={index}>{item.name}</h5>)}
                            <button onClick={handleShowRemain} style={{ borderRadius: "50%", border: "1px solid gray", padding: "20px" }}>Add</button>
                        </div>
                        <div className="remain" onClick={handleCancelP}>
                            {remainList.map((person, index) => (
                                <div key={index} style={{ marginBottom: "15px", paddingBottom: "10px" }}>
                                    <label htmlFor={person.name}>
                                        <img src={person.profile} alt="profile" style={{ verticalAlign: "middle", marginRight: "20px" }} />
                                        <span style={{ marginRight: "20px" }}>{person.name}</span>
                                    </label>
                                    <input type="checkbox" name="name" value={person.name}
                                        onChange={handleCheck}
                                        id={person.name} />
                                </div>
                            ))}
                            <div style={{ textAlign: "center" }}>
                                <button onClick={handlesubmit} >confirm</button>
                            </div>
                        </div>
                    </div>
                )
        }
    }
    const handleSearch = (e) => {
        if (e.target.value == "") {
            setGroup(grouplist);
        } else {
            setGroup(group.filter(item => item.name.includes(e.target.value)))
        }
    }
    const handleDelete = () => {
        if (nowGroup) {
            group.forEach((item, index) => {
                if (item.name === nowGroup.name) {
                    group.splice(index, 1);
                    setGroup([...group]);
                    setNowGroup(null);
                }
            })
        }
    }
    const handleGroupEnter = (e) => {
        setCurrentGroup(e.target.getAttribute("type"));
    }
    const handleGroupClick = (group) => {
        setCurrentGroup(group.name);
        setNowGroup(group);
    }
    const handleShow = (e) => {
        e.target.parentNode.parentNode.classList.add("show");
    }
    const handleFloatLeave = (e) => {
        handleCancelCheck();
        e.target.classList.remove("show")
    }
    const handleRemainLeave = (e) => {
        handleCancelCheck();
        e.target.parentNode.classList.remove("show")
    }
    const handleCheck = (e) => {
        if (e.target.checked) {
            setChecked([...checked, e.target.value])
        } else {
            checked.splice(checked.findIndex(item => item === e.target.value), 1);
            setChecked(checked);
        }
    }
    const handleSubmit = (e) => {
        let grandNode = e.target.parentNode.parentNode.parentNode;
        grandNode.classList.remove("show")
        const singleGroup = group.find(item => item.name === currentGroup);
        checked.forEach(item => {
            const index = remainList.findIndex(male => male.name === item);
            const member = remainList.splice(index, 1);
            singleGroup.members.push(...member);
        })
        handleCancelCheck();
        setCurrentGroup("");
        setRemainList(remainList);
        setGroup(group);
        if (remain.current) remain.current.classList.remove("show")
    }
    const handlesubmit = (e) => {
        let grandNode = e.target.parentNode.parentNode.parentNode;
        grandNode.classList.remove("show")
        const singleGroup = group.find(item => item.name === nowGroup.name);
        checked.forEach(item => {
            const index = remainList.findIndex(male => male.name === item);
            const member = remainList.splice(index, 1);
            singleGroup.members.push(...member);
        })
        handleCancelCheck();
        setCurrentGroup("");
        setRemainList(remainList);
        setGroup(group);
        if (remain.current) remain.current.classList.remove("show")
    }
    const handleCancelP = (e) => {
        e.stopPropagation();
    }
    const handleCancelCheck = () => {
        const children = document.getElementsByTagName("input");
        for (let child of children) {
            child.checked = false;
        }
        setChecked([]);
    }

    return (
        <div>
            <section className="grouplist">
                <div
                    style={{
                        margin: "0 auto",
                        width: "90%",
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "20px",
                    }}>
                    <span>Contact</span>
                    <span>
                        <button onClick={handleAddShow}>+</button>
                        <button onClick={handleDelete}>-</button>
                    </span>
                </div>
                <div
                    style={{ textAlign: "center" }}>
                    <input type="text" style={{ width: "90%" }} onChange={handleSearch} />
                </div>
                {
                    group.map((item, index) => (
                        <div className={currentGroup === item.name ? "checked group" : "group"} key={index} type={item.name}
                            onMouseEnter={handleGroupEnter}
                            onClick={() => { handleGroupClick(item) }}>
                            <span
                                style={{
                                    display: "inline-block",
                                    width: "30px",
                                    height: "30px",
                                    margin: "0 10px",
                                    border: "1px solid gray",
                                    borderRadius: "10px",
                                    transform: "translateY(10px)"
                                }}
                            ></span>
                            <span style={{ lineHeight: "60px" }}>
                                {item.name}
                            </span>
                            <div className="float" onMouseLeave={handleFloatLeave} onClick={handleCancelP}>
                                {item.members.map((member, index) => (
                                    <div key={index} style={{ marginBottom: "15px", paddingBottom: "10px", borderBottom: "1px solid white" }}>
                                        <img src={member.profile} alt="profile" style={{ verticalAlign: "middle", marginRight: "20px" }} />
                                        <span style={{ lineHeight: "40px" }}>{member.name}</span>
                                    </div>
                                ))}
                                <div style={{ textAlign: "center" }}>
                                    <button onClick={handleShow}>Add</button>
                                </div>
                                <div className="remain" onMouseLeave={handleRemainLeave}>
                                    {remainList.map((person, index) => (
                                        <div key={index} style={{ marginBottom: "15px", paddingBottom: "10px" }}>
                                            <label htmlFor={person.name}>
                                                <img src={person.profile} alt="profile" style={{ verticalAlign: "middle", marginRight: "20px" }} />
                                                <span style={{ marginRight: "20px" }}>{person.name}</span>
                                            </label>
                                            <input type="checkbox" name="name" value={person.name} onChange={handleCheck} id={person.name} />
                                        </div>
                                    ))}
                                    <div style={{ textAlign: "center" }}>
                                        <button onClick={handleSubmit}>confirm</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </section >
            <article ref={remain} className="grouplist">
                {renderGroup()}
            </article>
        </div>
    )
}

export default Group;