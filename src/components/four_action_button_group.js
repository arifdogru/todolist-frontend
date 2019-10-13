import React from "react";

class FourActionButtons extends React.Component {

    state = {
        save_disabled : false,
        save_invisible : false,
        update_disabled : false,
        update_invisible : false,
        delete_disabled : false,
        delete_invisible : false,
    }

    save_button_visibility_status() {
        let is_visible = true;
        this.props.page_objects.forEach( page_object => {
            if(page_object.object_key === "S") {
                if(page_object.selection === "INVISIBLE") {
                    is_visible = false;
                    return;
                }
            }
        });
        return is_visible;
    }

    update_button_visibility_status() {
        let is_visible = true;
        this.props.page_objects.forEach( page_object => {
            if(page_object.object_key === "U") {
                if(page_object.selection === "INVISIBLE") {
                    is_visible = false;
                    return;
                }
            }
        });
        return is_visible;
    }

    delete_button_visibility_status() {
        let is_visible = true;
        this.props.page_objects.forEach( page_object => {
            if(page_object.object_key === "D") {
                if(page_object.selection === "INVISIBLE") {
                    is_visible = false;
                    return;
                }
            }
        });
        console.log("Delete visibility ", is_visible);
        return is_visible;
    }

    save_button_disabled_status() {
        if(!this.props.insert) {
            return true;
        }
        let is_disable = false;
        this.props.page_objects.forEach( page_object => {
            if(page_object.object_key === "S") {
                if (page_object.selection === "DISABLE") {
                    is_disable = true;
                    return;
                }
            }
        });
        return is_disable;
    }

    update_button_disabled_status() {
        if(!this.props.update) {
            return true;
        }
        let is_disable = false;
        this.props.page_objects.forEach( page_object => {
            if(page_object.object_key === "U") {
                if (page_object.selection === "DISABLE") {
                    is_disable = true;
                    return;
                }
            }
        });
        return is_disable;
    }

    delete_button_disabled_status() {
        if(!this.props.update) {
            return true;
        }
        let is_disable = false;
        this.props.page_objects.forEach( page_object => {
            if(page_object.object_key === "D") {
                if (page_object.selection === "DISABLE") {
                    is_disable = true;
                    return;
                }
            }
        });
        return is_disable;
    }

    render() {
        const {t} = this.props;
        return (
            <div className="row" style={{ marginLeft: "1px" }}>
                <div className="btn-group" role="group" aria-label="Basic example">
                    {
                        this.save_button_visibility_status() ? (
                            <button
                            type="button"
                            className="btn btn-info"
                            onClick={this.props.onSaveClick}
                            style={{
                                backgroundColor: "#2988bc"
                            }}
                            disabled={this.save_button_disabled_status()}
                            
                            >
                                {t("button.save")}
                            </button>     
                        )
                        :
                        <div/>
                    
                    }
                    
                    {
                        this.update_button_visibility_status() ? (
                            <button
                                type="button"
                                className="btn btn-info"
                                onClick={this.props.onUpdateClick}
                                style={{
                                    backgroundColor: "#2988bc"
                                }}
                                disabled={this.update_button_disabled_status()}
                            >
                                {t("button.update")}
                            </button>
                        )
                        :
                        <div/>
                    }

                    {
                        this.delete_button_visibility_status() ? (
                            <button
                                type="button"
                                className="btn btn-info"
                                onClick={this.props.onDeleteClick}
                                style={{
                                    backgroundColor: "#2988bc"
                                }}
                                disabled={this.delete_button_disabled_status()}
                            >
                                {t("button.delete")}
                            </button>
                        )
                        :
                        <div/>
                    }
                    
                    <button
                        type="button"
                        className="btn btn-info"
                        onClick={this.props.onClearClick}
                        style={{
                            backgroundColor: "#2988bc"
                        }}
                    >
                        {t("button.clear")}
                    </button>
                </div>
            </div>);
    }
}
FourActionButtons.defaultProps = {
    page_objects:[]
  };
export default FourActionButtons;