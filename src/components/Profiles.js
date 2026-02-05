import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Profiles = () => {
  const profiles = [
    {
      name: "GitHub",
      url: "https://github.com/abhishekbh0476",
      icon: "FaGithub",
      color: "#FFFFFF"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/abhishek-b-h-1774a8336/",
      icon: FaLinkedin,
      color: "#0A66C2"
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/abhishekbh04/",
      icon: SiLeetcode,
      color: "#FFA116"
    }
  ];

  return (
    <section className="profiles">
      <h2 className="section-title">Player Profiles</h2>
      <div className="profiles-grid">
        {profiles.map((profile, index) => {
          const Icon = profile.icon;
          return (
            <a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="profile-card"
              style={{ borderColor: profile.color }}
            >
              <div
                className="profile-icon"
                style={{ backgroundColor: profile.color }}
              >
                <Icon size={26} />
              </div>
              <div className="profile-name">{profile.name}</div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Profiles;
