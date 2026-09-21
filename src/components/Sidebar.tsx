export default function Sidebar() {
    return (
        <aside className="sidebar">
        <p className="sidebarLabel">Currently</p>

        <p>
            Robotics researcher interested in manipulation,
            controls, and physical robotic systems.
        </p>

        <p className="sidebarLabel">At</p>

        <p>Princeton University</p>

        <div className="sidebarLinks">
            <a href="/resume.pdf">Resume</a>
            <a href="https://github.com/YOUR_USERNAME">GitHub</a>
            <a href="https://www.linkedin.com/in/YOUR_USERNAME">
            LinkedIn
            </a>
        </div>
        </aside>
    );
}