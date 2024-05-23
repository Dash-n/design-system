import Toolbar from "react-big-calendar/lib/Toolbar";
import { Toggle } from "../../Toggle/ToggleSwitch/Toggle";
import styles from "./Calender.module.css";

const toolbarNav = new Map();
toolbarNav.set("Previous", "PREV");
toolbarNav.set("Today", "TODAY");
toolbarNav.set("Next", "NEXT");

function CustomToolbar(
  changeView: (value: string) => void,
  toggleValue: string
) {
  return class CToolbar extends Toolbar {
    handleNavigation = (value: string) => {
      this.navigate(toolbarNav.get(value));
    };

    render() {
      return (
        <div className="rbc-toolbar">
          <div className={styles.toolbarNav}>
            <Toggle
              name="NavButtons"
              values={["Previous", "Today", "Next"]}
              defaultValue=""
              setChecked={this.handleNavigation}
            />
          </div>
          <p className="rbc-toolbar-label">{this.props.label}</p>
          <Toggle
            name="viewSelect"
            values={["Month", "Week", "Day"]}
            setChecked={changeView}
            defaultValue={toggleValue}
          />
        </div>
      );
    }

    navigate = (action) => {
      this.props.onNavigate(action);
    };
  };

  const onView = useCallback(
    (newView) => {
      setView(newView);
      setToggleValue("Day");
    },
    [setView]
  );
}
