import { Pagination } from '@mantine/core';
import './Footer.css';

const Footer = ({ total, value, onChange }) => {
    return (
        <footer className="footer">
            <Pagination total={total} value={value} onChange={onChange} />
        </footer>
    );
};

export default Footer;
