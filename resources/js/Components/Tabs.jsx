import '../Assects/Tabs.css';
const Tabs = ({ tabs, currentTab, onUpdateTab }) => {
    return (
        <ul className="tabs">
            {tabs.map(tab => (
                <li
                    key={tab.id}
                    className={`tab ${currentTab.name === tab.name ? 'active' : ''}`}
                    onClick={() => onUpdateTab(tab)}
                >
                    {tab.name}
                </li>
            ))}
        </ul>
    );
};

export default Tabs;
