import './Switcher.scss';

export const Switcher = () => {
    return (
        <label className="switcher">
            <input type="checkbox" />
            <span className="slider"></span>
        </label>
    );
};
