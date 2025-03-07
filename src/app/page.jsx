"use client";
import React from "react";

function MainComponent() {
  const [refreshing, setRefreshing] = useState(false);
  const [startY, setStartY] = useState(0);
  const [pullDistance, setPullDistance] = useState(0);
  const containerRef = useRef(null);
  const handleTouchStart = (e) => {
    if (containerRef.current.scrollTop === 0) {
      setStartY(e.touches[0].clientY);
    }
  };
  const handleTouchMove = (e) => {
    if (startY === 0) return;

    const currentY = e.touches[0].clientY;
    const distance = currentY - startY;

    if (distance > 0 && containerRef.current.scrollTop === 0) {
      setPullDistance(Math.min(distance * 0.5, 100));
      e.preventDefault();
    }
  };
  const handleTouchEnd = async () => {
    if (pullDistance > 70) {
      setRefreshing(true);
      setPullDistance(0);
      setStartY(0);

      // Simulate refresh
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Reset states
      setSchedule((prevSchedule) => [...prevSchedule]);
      setAssignments((prevAssignments) => [...prevAssignments]);
      setRefreshing(false);
    } else {
      setPullDistance(0);
      setStartY(0);
    }
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [showRegister, setShowRegister] = useState(false);
  const [registerForm, setRegisterForm] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [schedule, setSchedule] = useState([
    {
      id: 1,
      name: "R-LAB",
      time: "8:00 AM",
      day: "Monday",
      room: "Room 428",
      color: "#3B82F6",
      notified: false,
      preNotified: false,
    },
    {
      id: 2,
      name: "R-LAB",
      time: "9:00 AM",
      day: "Monday",
      room: "Room 428",
      color: "#3B82F6",
      notified: false,
      preNotified: false,
    },
    {
      id: 3,
      name: "JAVA",
      time: "10:00 AM",
      day: "Monday",
      room: "Room 412",
      color: "#EF4444",
      notified: false,
      preNotified: false,
    },
    {
      id: 4,
      name: "JAVA",
      time: "11:00 AM",
      day: "Monday",
      room: "Room 412",
      color: "#EF4444",
      notified: false,
      preNotified: false,
    },
    {
      id: 5,
      name: "OE",
      time: "1:00 PM",
      day: "Monday",
      room: "Room 505",
      color: "#10B981",
      notified: false,
      preNotified: false,
    },
    {
      id: 6,
      name: "R",
      time: "2:00 PM",
      day: "Monday",
      room: "Room 505",
      color: "#F59E0B",
      notified: false,
      preNotified: false,
    },
    {
      id: 7,
      name: "MATHS",
      time: "8:00 AM",
      day: "Tuesday",
      room: "Room 504",
      color: "#3B82F6",
      notified: false,
      preNotified: false,
    },
    {
      id: 8,
      name: "OS",
      time: "9:00 AM",
      day: "Tuesday",
      room: "Room 502",
      color: "#EF4444",
      notified: false,
      preNotified: false,
    },
    {
      id: 9,
      name: "CN-LAB",
      time: "10:00 AM",
      day: "Tuesday",
      room: "Room 502",
      color: "#10B981",
      notified: false,
      preNotified: false,
    },
    {
      id: 10,
      name: "CN-LAB",
      time: "11:00 AM",
      day: "Tuesday",
      room: "Room 502",
      color: "#10B981",
      notified: false,
      preNotified: false,
    },
    {
      id: 11,
      name: "R",
      time: "1:00 PM",
      day: "Tuesday",
      room: "Room 505",
      color: "#F59E0B",
      notified: false,
      preNotified: false,
    },
    {
      id: 12,
      name: "COA",
      time: "2:00 PM",
      day: "Tuesday",
      room: "Room 502",
      color: "#3B82F6",
      notified: false,
      preNotified: false,
    },
    {
      id: 13,
      name: "CLAD",
      time: "8:00 AM",
      day: "Wednesday",
      room: "Room 504",
      color: "#EF4444",
      notified: false,
      preNotified: false,
    },
    {
      id: 14,
      name: "CLAD",
      time: "9:00 AM",
      day: "Wednesday",
      room: "Room 504",
      color: "#EF4444",
      notified: false,
      preNotified: false,
    },
    {
      id: 15,
      name: "COA",
      time: "10:00 AM",
      day: "Wednesday",
      room: "Room 502",
      color: "#3B82F6",
      notified: false,
      preNotified: false,
    },
    {
      id: 16,
      name: "OS",
      time: "11:00 AM",
      day: "Wednesday",
      room: "Room 502",
      color: "#10B981",
      notified: false,
      preNotified: false,
    },
    {
      id: 17,
      name: "OE",
      time: "1:00 PM",
      day: "Wednesday",
      room: "Room 505",
      color: "#F59E0B",
      notified: false,
      preNotified: false,
    },
    {
      id: 18,
      name: "CN",
      time: "2:00 PM",
      day: "Wednesday",
      room: "Room 502",
      color: "#3B82F6",
      notified: false,
      preNotified: false,
    },
    {
      id: 19,
      name: "MATHS",
      time: "3:00 PM",
      day: "Wednesday",
      room: "Room 504",
      color: "#EF4444",
      notified: false,
      preNotified: false,
    },
    {
      id: 20,
      name: "JAVA",
      time: "8:00 AM",
      day: "Thursday",
      room: "Room 412",
      color: "#10B981",
      notified: false,
      preNotified: false,
    },
    {
      id: 21,
      name: "JAVA",
      time: "9:00 AM",
      day: "Thursday",
      room: "Room 412",
      color: "#10B981",
      notified: false,
      preNotified: false,
    },
    {
      id: 22,
      name: "COA",
      time: "10:00 AM",
      day: "Thursday",
      room: "Room 502",
      color: "#F59E0B",
      notified: false,
      preNotified: false,
    },
    {
      id: 23,
      name: "OS",
      time: "11:00 AM",
      day: "Thursday",
      room: "Room 502",
      color: "#3B82F6",
      notified: false,
      preNotified: false,
    },
    {
      id: 24,
      name: "R",
      time: "1:00 PM",
      day: "Thursday",
      room: "Room 505",
      color: "#EF4444",
      notified: false,
      preNotified: false,
    },
    {
      id: 25,
      name: "CN",
      time: "2:00 PM",
      day: "Thursday",
      room: "Room 502",
      color: "#10B981",
      notified: false,
      preNotified: false,
    },
    {
      id: 26,
      name: "OS LAB",
      time: "8:00 AM",
      day: "Friday",
      room: "Room 411",
      color: "#F59E0B",
      notified: false,
      preNotified: false,
    },
    {
      id: 27,
      name: "OS LAB",
      time: "9:00 AM",
      day: "Friday",
      room: "Room 411",
      color: "#F59E0B",
      notified: false,
      preNotified: false,
    },
    {
      id: 28,
      name: "CN",
      time: "10:00 AM",
      day: "Friday",
      room: "Room 502",
      color: "#3B82F6",
      notified: false,
      preNotified: false,
    },
    {
      id: 29,
      name: "MATHS",
      time: "11:00 AM",
      day: "Friday",
      room: "Room 504",
      color: "#EF4444",
      notified: false,
      preNotified: false,
    },
    {
      id: 30,
      name: "OE",
      time: "1:00 PM",
      day: "Friday",
      room: "Room 505",
      color: "#10B981",
      notified: false,
      preNotified: false,
    },
    {
      id: 31,
      name: "DT",
      time: "2:00 PM",
      day: "Friday",
      room: "Room 511",
      color: "#F59E0B",
      notified: false,
      preNotified: false,
    },
    {
      id: 32,
      name: "DT",
      time: "3:00 PM",
      day: "Friday",
      room: "Room 511",
      color: "#F59E0B",
      notified: false,
      preNotified: false,
    },
    {
      id: 33,
      name: "DOSL",
      time: "4:00 PM",
      day: "Friday",
      room: "Room 211-VB",
      color: "#3B82F6",
      notified: false,
      preNotified: false,
    },
  ]);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentClass, setCurrentClass] = useState(null);
  const [remainingTime, setRemainingTime] = useState(0);
  const [showAddClass, setShowAddClass] = useState(false);
  const [selectedClass, setSelectedClass] = useState({
    name: "",
    time: "",
    day: "",
    room: "",
    color: "#3B82F6",
  });
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const times = [
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];
  const [notificationTime, setNotificationTime] = useState(15);
  const [error, setError] = useState(null);
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [showPermissionModal, setShowPermissionModal] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [timeFormat, setTimeFormat] = useState("12");
  const [assignments, setAssignments] = useState([]);
  const [showAddAssignment, setShowAddAssignment] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState({
    subject: "",
    description: "",
    deadline: "",
    priority: "medium",
  });
  const [longPressedClass, setLongPressedClass] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const currentDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][new Date().getDay()];
  const handleAddClass = () => {
    setShowAddClass(true);
  };
  const convertTo24Hour = (time) => {
    const [timeStr, period] = time.split(" ");
    const [hours, minutes] = timeStr.split(":");
    let hour = parseInt(hours);

    if (period === "PM" && hour !== 12) {
      hour += 12;
    } else if (period === "AM" && hour === 12) {
      hour = 0;
    }

    return `${hour.toString().padStart(2, "0")}:${minutes}`;
  };
  const convertTo12Hour = (time) => {
    const [hours, minutes] = time.split(":");
    let hour = parseInt(hours);
    const period = hour >= 12 ? "PM" : "AM";

    if (hour > 12) {
      hour -= 12;
    } else if (hour === 0) {
      hour = 12;
    }

    return `${hour}:${minutes} ${period}`;
  };
  const getCurrentClass = () => {
    const now = new Date();
    const currentDay = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ][now.getDay()];

    const currentClass = schedule.find((class_) => {
      const time24h =
        class_.time.includes("AM") || class_.time.includes("PM")
          ? convertTo24Hour(class_.time)
          : class_.time;
      const [hours, minutes] = time24h.split(":");
      const classTime = new Date();
      classTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);
      const nextClassTime = new Date(classTime);
      nextClassTime.setHours(
        nextClassTime.getHours() + 1,
        parseInt(minutes),
        0,
        0
      );

      const nowTime = now.getTime();
      const classStartTime = classTime.getTime();
      const classEndTime = nextClassTime.getTime();

      return (
        class_.day === currentDay &&
        nowTime >= classStartTime &&
        nowTime < classEndTime
      );
    });

    if (currentClass) {
      const time24h =
        currentClass.time.includes("AM") || currentClass.time.includes("PM")
          ? convertTo24Hour(currentClass.time)
          : currentClass.time;
      const [hours, minutes] = time24h.split(":");
      const classTime = new Date();
      classTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);
      const nextClassTime = new Date(classTime);
      nextClassTime.setHours(
        nextClassTime.getHours() + 1,
        parseInt(minutes),
        0,
        0
      );

      const remaining = Math.max(0, nextClassTime - now);
      setRemainingTime(remaining);
      setCurrentClass(currentClass);
    } else {
      setCurrentClass(null);
      setRemainingTime(0);
    }
  };
  const checkClassEnd = () => {
    if (currentClass) {
      const time24h =
        currentClass.time.includes("AM") || currentClass.time.includes("PM")
          ? convertTo24Hour(currentClass.time)
          : currentClass.time;
      const [hours, minutes] = time24h.split(":");
      const classEndTime = new Date();
      classEndTime.setHours(parseInt(hours) + 1, parseInt(minutes), 0, 0);

      if (new Date() >= classEndTime) {
        const audio = new Audio(
          "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YWoGAACBhYqFbF1fdH2Fi4R6c3R+goaCfHl5foKFg4B5eH2Eh4aBe3h4gYaHhH16eoCFiIWAfXp6gYeKhoJ/fX6DiYuHg4B+f4SJi4iEgX9/hImLiYWCgICFiYuJhYKAgoaJi4mGg4GDhomLiYaDgYOHiYuJhoSChIeJiomHhIKEh4mKiYeEg4WHiYqJh4WEhYeJiomHhYSGiImKiYiFhIaIiYqJiIaFhoiJiomIhoWGiImKiYiGhYaIiYqJiIaFh4iJiomIh4aHiImKiYiHhoeIiYqJiIeGh4iJiomIh4aHiImKiYiHhoeIiYmJiIeGh4iJiYmIh4eHiImJiYiHh4eIiYmJiIeHh4iJiYmIh4eHiImJiYiHh4eIiYmJiIeHh4iJiYmIh4eHiImJiYiHh4eIiYmJiIeHh4iJiYmIh4eHiImJiYiHh4eIiYmJiIeHh4iJiYmIh4eHiImJiYiHh4eIiYmJiIeHh4iJiYmIh4eHiImJiYiHh4eIiYmJiIeHh4iJiYmIh4eHiImJiYiHh4eIiYmJiIeHh4iJiYmIh4eHiImJiYiHh4eIiYmJiIeHh4iJiYmIh4eHiImJiYiHh4eIiYmJiIeHh4iJiYmIh4eHiImJiYiHh4eIiYmJiIeHh4iJiYmIh4eHiImJiYiHh4eIiYmJiIeHh4iJiYmIh4eHiImJiYiHh4eIiYmJiIeHh4iJiYmIh4eHiImJiYiHh4eIiYmJiIeHh4iJiYmIh4eHiImJiYiHh4eIiYmJiIeHh4iJiYmIh4eHiImJiYiHh4eIiYmJiIeHh4iJiYmIh4eHiImJiYiHh4eIiYmJiIeHh4iJiYmIh4eHiImJiYiHh4eIiYmJiIeHh4iJiYmIh4eHiImJiYiHh4eIiYmJiIeHh4iJiYmIh4eHiImJiYiHh4eIiYmJiIeHh4iJiYmIh4eHiImJiYiHh4eIiYmJiIeHh4iJiYmIh4eHiImJiYiHh4eIiYmJiIeHh4iJiYmIh4eHiImJiYiHh4eIiYmJiIeHh4iJiYmIh4eHiImJiYiHh4eIiYmJiIeHh4iJiYmIh4eHiImJiYiHh4eIiYmJiIeHh4iJiYmIh4eHiImJiYiHh4eIiYmJiIeHh4iJiYmIh4eHiImJiYiHh4eIiYmJiIeHh4iJiYmIh4eHiImJiYiHh4eIiYmJiIeHh4iJiYmIh4eHiImJiYiHh4eIiYmJiIeHh4iJiYmIh4eHiImJiYiHh4eIiYmJiIeHh4iJiYmIh4eHiImJiYiHh4eIiYmJiIeHh4iJiYmIh4eHiImJiYiHh4eIiYmJiIeHh4iJiYmIh4eHiImJiYiHh4eIiYmJiIeHh4iJiYmIh4eHiImJiYiHh4eIiYmJiIeHh4iJiYmIh4eHiImJiYiHh4eIiYmJiIeHh4iJiYmIh4eHiImJiYiHh4eIiYmJiIeHh4iJiYmIh4eHiImJiYiHh4eIiYmJiIeHh4iJiYmIh4eHiImJiYiHh4eIiYmJiIeHh4iJiYmIh4eHiImJiYiHh4eIiYmJiIeHh4iJiYk="
        );
        audio.play();
        const classElement = document.querySelector(".current-class");
        if (classElement) {
          classElement.classList.add("class-ended");
        }
      }
    }
  };
  const timeInterval = setInterval(() => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    let formattedTime;
    if (timeFormat === "24") {
      formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}`;
    } else {
      const period = hours >= 12 ? "PM" : "AM";
      const displayHours = hours % 12 || 12;
      formattedTime = `${displayHours}:${minutes
        .toString()
        .padStart(2, "0")} ${period}`;
    }

    setCurrentTime(formattedTime);
    getCurrentClass();
    checkClassEnd();
  }, 1000);
  const checkUpcomingClasses = () => {
    if (!notificationsEnabled) return;

    const now = new Date();
    const currentDay = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ][now.getDay()];

    schedule.forEach((class_) => {
      if (class_.day === currentDay) {
        const [time, period] = class_.time.split(" ");
        const [hours, minutes] = time.split(":");
        const classTime = new Date();
        classTime.setHours(
          period === "PM" ? parseInt(hours) + 12 : parseInt(hours),
          parseInt(minutes),
          0,
          0
        );

        const timeDiff = (classTime - now) / (1000 * 60);

        if (timeDiff > 0 && timeDiff <= 15 && !class_.preNotified) {
          if ("Notification" in window) {
            new Notification(`Class Starting Soon: ${class_.name}`, {
              body: `Your class starts in 15 minutes in Room ${class_.room}`,
              icon: "/favicon.ico",
            });
          }

          setSchedule((prev) =>
            prev.map((c) =>
              c.id === class_.id ? { ...c, preNotified: true } : c
            )
          );
        }

        if (timeDiff > 0 && timeDiff <= 1 && !class_.notified) {
          if ("Notification" in window) {
            new Notification(`Class Starting Now: ${class_.name}`, {
              body: `Your class is starting now in Room ${class_.room}`,
              icon: "/favicon.ico",
            });
          }

          setSchedule((prev) =>
            prev.map((c) => (c.id === class_.id ? { ...c, notified: true } : c))
          );
        }
      }
    });

    assignments.forEach((assignment) => {
      const deadline = new Date(assignment.deadline);
      const timeDiff = (deadline - now) / (1000 * 60 * 60);

      if (timeDiff > 0 && timeDiff <= 24 && !assignment.notified) {
        if ("Notification" in window) {
          new Notification(`Assignment Due Soon: ${assignment.subject}`, {
            body: `Your assignment "${
              assignment.description
            }" is due in ${Math.round(timeDiff)} hours`,
            icon: "/favicon.ico",
          });
        }

        setAssignments((prev) =>
          prev.map((a) =>
            a.id === assignment.id ? { ...a, notified: true } : a
          )
        );
      }
    });
  };
  const handleClearTimetable = () => {
    setSchedule([]);
    localStorage.removeItem("schedule");
  };
  const toggleTimeFormat = () => {
    setTimeFormat((prev) => (prev === "12" ? "24" : "12"));
  };
  const displayTime = (time) => {
    if (timeFormat === "24") {
      if (time.includes("AM") || time.includes("PM")) {
        return convertTo24Hour(time);
      }
      return time;
    } else {
      if (!time.includes("AM") && !time.includes("PM")) {
        return convertTo12Hour(time);
      }
      return time;
    }
  };
  const handleAddAssignment = () => {
    setShowAddAssignment(true);
  };
  const handleClearConfirm = () => {
    setShowClearConfirm(true);
  };
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const handleLongPress = (class_) => {
    setLongPressedClass(class_);
    setShowDeleteConfirm(true);
  };
  const handleDeleteClass = () => {
    if (longPressedClass) {
      const newSchedule = schedule.filter((c) => c.id !== longPressedClass.id);
      setSchedule(newSchedule);
      localStorage.setItem("schedule", JSON.stringify(newSchedule));
      setShowDeleteConfirm(false);
      setLongPressedClass(null);
    }
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError("");

    try {
      const response = await fetch("/api/db/user-details-1870004", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query:
            "SELECT * FROM `users` WHERE `username` = ? AND `password` = ?",
          values: [loginForm.username, loginForm.password],
        }),
      });

      const data = await response.json();

      if (data && data.length > 0) {
        // Create schedule table if it doesn't exist
        await fetch("/api/db/user-details-1870004", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: `CREATE TABLE IF NOT EXISTS schedule (
              id INTEGER PRIMARY KEY,
              user_id TEXT,
              name TEXT,
              time TEXT,
              day TEXT,
              room TEXT,
              color TEXT,
              notified BOOLEAN,
              preNotified BOOLEAN
            )`,
          }),
        });

        // Fetch user's schedule
        const scheduleResponse = await fetch("/api/db/user-details-1870004", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: "SELECT * FROM `schedule` WHERE `user_id` = ?",
            values: [data[0].id],
          }),
        });

        const scheduleData = await scheduleResponse.json();
        if (scheduleData && scheduleData.length > 0) {
          setSchedule(scheduleData);
        }

        setIsLoggedIn(true);
      } else {
        setLoginError("Invalid username or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      setLoginError("An error occurred while signing in. Please try again.");
    }
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoginError("");

    try {
      const response = await fetch("/api/db/user-details-1870004", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query:
            "INSERT INTO `users` (`username`, `password`, `email`) VALUES (?, ?, ?)",
          values: [
            registerForm.username,
            registerForm.password,
            registerForm.email,
          ],
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Create schedule table for new user
        await fetch("/api/db/user-details-1870004", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: `CREATE TABLE IF NOT EXISTS schedule (
              id INTEGER PRIMARY KEY,
              user_id TEXT,
              name TEXT,
              time TEXT,
              day TEXT,
              room TEXT,
              color TEXT,
              notified BOOLEAN,
              preNotified BOOLEAN
            )`,
          }),
        });

        setShowRegister(false);
        setLoginForm({
          username: registerForm.username,
          password: registerForm.password,
        });
      } else {
        setLoginError("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      setLoginError("An error occurred while registering. Please try again.");
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#000B3C] to-[#0B1341] flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-[#1E1E1E]/90 rounded-2xl shadow-2xl p-8 border border-gray-800">
          <div className="mb-8 text-center">
            <div className="text-4xl mb-2">
              <i className="fas fa-user-circle text-blue-500"></i>
            </div>
            {!showRegister ? (
              <>
                <h2 className="text-3xl font-bold text-white mb-2 font-roboto">
                  Welcome Back
                </h2>
                <p className="text-gray-400 font-roboto">
                  Please sign in to continue
                </p>
              </>
            ) : (
              <>
                <h2 className="text-3xl font-bold text-white mb-2 font-roboto">
                  Create Account
                </h2>
                <p className="text-gray-400 font-roboto">
                  Register for system access
                </p>
              </>
            )}
          </div>
          {!showRegister ? (
            <>
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-4">
                  <div className="relative">
                    <input
                      type="text"
                      name="username"
                      placeholder="Enter Username"
                      className="w-full p-4 pl-12 bg-[#2a2a2a]/80 rounded-lg border border-gray-700 text-white font-roboto focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                      value={loginForm.username}
                      onChange={(e) =>
                        setLoginForm({ ...loginForm, username: e.target.value })
                      }
                    />
                    <i className="fas fa-user absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter Password"
                      className="w-full p-4 pl-12 bg-[#2a2a2a]/80 rounded-lg border border-gray-700 text-white font-roboto focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                      value={loginForm.password}
                      onChange={(e) =>
                        setLoginForm({ ...loginForm, password: e.target.value })
                      }
                    />
                    <i className="fas fa-lock absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                  </div>
                </div>
                {loginError && (
                  <div className="bg-red-500/10 border border-red-500 rounded-lg p-3">
                    <p className="text-red-500 font-roboto text-sm">
                      {loginError}
                    </p>
                  </div>
                )}
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 transition-all duration-300 font-roboto transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                >
                  <i className="fas fa-sign-in-alt mr-2"></i>
                  Sign In
                </button>
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-700"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-[#1E1E1E] text-gray-400 font-roboto">
                      Don't have an account? Register
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowRegister(true)}
                  className="w-full bg-transparent border border-gray-700 text-gray-300 p-4 rounded-lg hover:bg-gray-800 transition-all duration-300 font-roboto"
                >
                  Register New Account
                </button>
              </form>
            </>
          ) : (
            <>
              <form onSubmit={handleRegister} className="space-y-6">
                <div className="space-y-4">
                  <div className="relative">
                    <input
                      type="text"
                      name="username"
                      placeholder="Select Username"
                      className="w-full p-4 pl-12 bg-[#2a2a2a]/80 rounded-lg border border-gray-700 text-white font-roboto focus:border-green-500 focus:ring-2 focus:ring-green-500 transition-all duration-300"
                      value={registerForm.username}
                      onChange={(e) =>
                        setRegisterForm({
                          ...registerForm,
                          username: e.target.value,
                        })
                      }
                    />
                    <i className="fas fa-user absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      placeholder="Corporate Email Address"
                      className="w-full p-4 pl-12 bg-[#2a2a2a]/80 rounded-lg border border-gray-700 text-white font-roboto focus:border-green-500 focus:ring-2 focus:ring-green-500 transition-all duration-300"
                      value={registerForm.email}
                      onChange={(e) =>
                        setRegisterForm({
                          ...registerForm,
                          email: e.target.value,
                        })
                      }
                    />
                    <i className="fas fa-envelope absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      name="password"
                      placeholder="Secure Password"
                      className="w-full p-4 pl-12 bg-[#2a2a2a]/80 rounded-lg border border-gray-700 text-white font-roboto focus:border-green-500 focus:ring-2 focus:ring-green-500 transition-all duration-300"
                      value={registerForm.password}
                      onChange={(e) =>
                        setRegisterForm({
                          ...registerForm,
                          password: e.target.value,
                        })
                      }
                    />
                    <i className="fas fa-lock absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 transition-all duration-300 font-roboto transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                >
                  <i className="fas fa-user-plus mr-2"></i>
                  Complete Registration
                </button>
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-700"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-[#1E1E1E] text-gray-400 font-roboto">
                      Already have an account?
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowRegister(false)}
                  className="w-full bg-transparent border border-gray-700 text-gray-300 p-4 rounded-lg hover:bg-gray-800 transition-all duration-300 font-roboto"
                >
                  Return to Sign In
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-[#1a0b2e] to-[#2b1055] px-4 py-6 text-white overflow-y-auto will-change-transform"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="transition-transform duration-200 ease-out will-change-transform"
        style={{ transform: `translateY(${pullDistance}px)` }}
      >
        {refreshing && (
          <div className="absolute top-0 left-0 right-0 flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
          </div>
        )}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setIsLoggedIn(false)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 font-roboto w-full md:w-auto"
          >
            Logout
          </button>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
          <div className="flex items-center justify-between w-full md:w-auto">
            <div className="flex items-center">
              <div className="relative inline-block w-12 h-6 mr-2">
                <input
                  type="checkbox"
                  className="peer sr-only"
                  checked={timeFormat === "24"}
                  onChange={toggleTimeFormat}
                  id="toggle"
                />
                <label
                  htmlFor="toggle"
                  className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-600 rounded-full transition-all duration-300 before:content-[''] before:absolute before:w-4 before:h-4 before:left-1 before:bottom-1 before:bg-white before:rounded-full before:transition-all before:duration-300 peer-checked:before:translate-x-6 peer-checked:bg-blue-500"
                ></label>
              </div>
              <span className="text-sm font-roboto text-gray-300 mr-4">
                {timeFormat === "12" ? "12h" : "24h"}
              </span>
            </div>
            <button
              onClick={handleClearConfirm}
              className="md:hidden bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 flex items-center justify-center font-roboto w-auto min-w-[120px]"
            >
              <i className="fas fa-trash mr-2"></i>
              Clear All
            </button>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <button
              onClick={handleAddClass}
              className="flex-1 md:flex-none bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center justify-center font-roboto min-w-[120px]"
            >
              <i className="fas fa-plus mr-2"></i>
              Add Class
            </button>
            <button
              onClick={handleAddAssignment}
              className="flex-1 md:flex-none bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 flex items-center justify-center font-roboto min-w-[120px]"
            >
              <i className="fas fa-tasks mr-2"></i>
              Add Assignment
            </button>
            <button
              onClick={handleClearConfirm}
              className="hidden md:flex flex-1 md:flex-none bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 items-center justify-center font-roboto min-w-[120px]"
            >
              <i className="fas fa-trash mr-2"></i>
              Clear All
            </button>
          </div>
        </div>
        {showPermissionModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-[#1E1E1E] p-6 rounded-lg shadow-xl max-w-sm w-full mx-4">
              <h2 className="text-xl font-bold mb-4 font-roboto text-white">
                Enable Notifications
              </h2>
              <p className="mb-6 font-roboto text-gray-300">
                Allow notifications to receive reminders before your classes
                start.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={async () => {
                    if ("Notification" in window) {
                      const permission = await Notification.requestPermission();
                      if (permission === "granted") {
                        setNotificationsEnabled(true);
                        setShowPermissionModal(false);
                      } else {
                        setError(
                          "Please enable notifications to receive class reminders"
                        );
                      }
                    }
                  }}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 font-roboto"
                >
                  Enable
                </button>
                <button
                  onClick={() => setShowPermissionModal(false)}
                  className="bg-[#333333] text-gray-300 px-4 py-2 rounded-lg hover:bg-[#404040] font-roboto"
                >
                  Skip
                </button>
              </div>
              {error && (
                <p className="mt-4 text-red-500 font-roboto">{error}</p>
              )}
            </div>
          </div>
        )}
        {showAddClass && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-[#1E1E1E] p-6 rounded-lg shadow-xl max-w-md w-full mx-4">
              <h2 className="text-xl font-bold mb-4 font-roboto text-white">
                Add New Class
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-roboto mb-1 text-gray-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    className="w-full p-2 border border-gray-600 rounded font-roboto bg-[#333333] text-white"
                    value={selectedClass.name}
                    onChange={(e) =>
                      setSelectedClass((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-roboto mb-1 text-gray-300">
                    Time
                  </label>
                  <select
                    name="time"
                    className="w-full p-2 border border-gray-600 rounded font-roboto bg-[#333333] text-white"
                    value={selectedClass.time}
                    onChange={(e) =>
                      setSelectedClass((prev) => ({
                        ...prev,
                        time: e.target.value,
                      }))
                    }
                  >
                    <option value="">Select Time</option>
                    {times.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-roboto mb-1 text-gray-300">
                    Day
                  </label>
                  <select
                    name="day"
                    className="w-full p-2 border border-gray-600 rounded font-roboto bg-[#333333] text-white"
                    value={selectedClass.day}
                    onChange={(e) =>
                      setSelectedClass((prev) => ({
                        ...prev,
                        day: e.target.value,
                      }))
                    }
                  >
                    <option value="">Select Day</option>
                    {days.map((day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-roboto mb-1 text-gray-300">
                    Room
                  </label>
                  <input
                    type="text"
                    name="room"
                    className="w-full p-2 border border-gray-600 rounded font-roboto bg-[#333333] text-white"
                    value={selectedClass.room}
                    onChange={(e) =>
                      setSelectedClass((prev) => ({
                        ...prev,
                        room: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>
              <div className="flex justify-end gap-4 mt-6">
                <button
                  onClick={() => {
                    setShowAddClass(false);
                    setSelectedClass({
                      name: "",
                      time: "",
                      day: "",
                      room: "",
                      color: "#3B82F6",
                    });
                  }}
                  className="px-4 py-2 text-gray-300 font-roboto hover:bg-[#404040] rounded bg-[#333333]"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    if (
                      selectedClass.name &&
                      selectedClass.time &&
                      selectedClass.day &&
                      selectedClass.room
                    ) {
                      const newSchedule = [
                        ...schedule,
                        {
                          ...selectedClass,
                          id: schedule.length + 1,
                          notified: false,
                          color:
                            "#" +
                            Math.floor(Math.random() * 16777215).toString(16),
                        },
                      ];
                      setSchedule(newSchedule);
                      localStorage.setItem(
                        "schedule",
                        JSON.stringify(newSchedule)
                      );
                      setShowAddClass(false);
                      setSelectedClass({
                        name: "",
                        time: "",
                        day: "",
                        room: "",
                        color: "#3B82F6",
                      });
                    }
                  }}
                  className="px-4 py-2 bg-blue-500 text-white font-roboto rounded hover:bg-blue-600"
                >
                  Add Class
                </button>
              </div>
            </div>
          </div>
        )}
        {showAddAssignment && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-[#1E1E1E] p-6 rounded-lg shadow-xl max-w-md w-full mx-4">
              <h2 className="text-xl font-bold mb-4 font-roboto text-white">
                Add New Assignment
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-roboto mb-1 text-gray-300">
                    Subject
                  </label>
                  <select
                    name="subject"
                    className="w-full p-2 border border-gray-600 rounded font-roboto bg-[#333333] text-white"
                    value={selectedAssignment.subject}
                    onChange={(e) =>
                      setSelectedAssignment((prev) => ({
                        ...prev,
                        subject: e.target.value,
                      }))
                    }
                  >
                    <option value="">Select Subject</option>
                    {Array.from(new Set(schedule.map((c) => c.name))).map(
                      (subject) => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      )
                    )}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-roboto mb-1 text-gray-300">
                    Description
                  </label>
                  <textarea
                    name="description"
                    className="w-full p-2 border border-gray-600 rounded font-roboto bg-[#333333] text-white"
                    value={selectedAssignment.description}
                    onChange={(e) =>
                      setSelectedAssignment((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-roboto mb-1 text-gray-300">
                    Deadline
                  </label>
                  <input
                    type="datetime-local"
                    name="deadline"
                    className="w-full p-2 border border-gray-600 rounded font-roboto bg-[#333333] text-white"
                    value={selectedAssignment.deadline}
                    onChange={(e) =>
                      setSelectedAssignment((prev) => ({
                        ...prev,
                        deadline: e.target.value,
                      }))
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-roboto mb-1 text-gray-300">
                    Priority
                  </label>
                  <select
                    name="priority"
                    className="w-full p-2 border border-gray-600 rounded font-roboto bg-[#333333] text-white"
                    value={selectedAssignment.priority}
                    onChange={(e) =>
                      setSelectedAssignment((prev) => ({
                        ...prev,
                        priority: e.target.value,
                      }))
                    }
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end gap-4 mt-6">
                <button
                  onClick={() => {
                    setShowAddAssignment(false);
                    setSelectedAssignment({
                      subject: "",
                      description: "",
                      deadline: "",
                      priority: "medium",
                    });
                  }}
                  className="px-4 py-2 text-gray-300 font-roboto hover:bg-[#404040] rounded bg-[#333333]"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    if (
                      selectedAssignment.subject &&
                      selectedAssignment.description &&
                      selectedAssignment.deadline
                    ) {
                      const newAssignments = [
                        ...assignments,
                        {
                          ...selectedAssignment,
                          id: assignments.length + 1,
                          completed: false,
                        },
                      ];
                      setAssignments(newAssignments);
                      localStorage.setItem(
                        "assignments",
                        JSON.stringify(newAssignments)
                      );
                      setShowAddAssignment(false);
                      setSelectedAssignment({
                        subject: "",
                        description: "",
                        deadline: "",
                        priority: "medium",
                      });
                    }
                  }}
                  className="px-4 py-2 bg-green-500 text-white font-roboto rounded hover:bg-green-600"
                >
                  Add Assignment
                </button>
              </div>
            </div>
          </div>
        )}
        {showClearConfirm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-[#1E1E1E] p-6 rounded-lg shadow-xl max-w-sm w-full mx-4">
              <h2 className="text-xl font-bold mb-4 font-roboto text-white">
                Clear Timetable
              </h2>
              <p className="mb-6 font-roboto text-gray-300">
                Are you sure you want to clear all classes? This cannot be
                undone.
              </p>
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setShowClearConfirm(false)}
                  className="px-4 py-2 text-gray-300 font-roboto hover:bg-[#404040] rounded bg-[#333333]"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    handleClearTimetable();
                    setShowClearConfirm(false);
                  }}
                  className="px-4 py-2 bg-red-500 text-white font-roboto rounded hover:bg-red-600"
                >
                  Clear All
                </button>
              </div>
            </div>
          </div>
        )}
        {showDeleteConfirm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-[#1E1E1E] p-6 rounded-lg shadow-xl max-w-sm w-full mx-4">
              <h2 className="text-xl font-bold mb-4 font-roboto text-white">
                Delete Class
              </h2>
              <p className="mb-6 font-roboto text-gray-300">
                Are you sure you want to delete this class?
              </p>
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => {
                    setShowDeleteConfirm(false);
                    setLongPressedClass(null);
                  }}
                  className="px-4 py-2 text-gray-300 font-roboto hover:bg-[#404040] rounded bg-[#333333]"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteClass}
                  className="px-4 py-2 bg-red-500 text-white font-roboto rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="bg-[#2d1b4d]/90 backdrop-blur-lg border border-violet-500/20 rounded-lg shadow-lg shadow-violet-500/20 p-4">
            <h2 className="text-xl font-bold mb-4 font-roboto text-white">
              Assignments
            </h2>
            <div className="space-y-4">
              {assignments.map((assignment) => (
                <div
                  key={assignment.id}
                  className={`p-4 rounded-lg backdrop-blur-sm border border-violet-500/20 ${
                    assignment.priority === "high"
                      ? "bg-red-900/50"
                      : assignment.priority === "medium"
                      ? "bg-yellow-900/50"
                      : "bg-green-900/50"
                  } ${assignment.completed ? "opacity-50" : ""}`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold font-roboto text-white">
                        {assignment.subject}
                      </h3>
                      <p className="text-sm font-roboto text-gray-300">
                        {assignment.description}
                      </p>
                      <p className="text-xs font-roboto text-gray-400 mt-2">
                        Due: {new Date(assignment.deadline).toLocaleString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => {
                          const newAssignments = assignments.map((a) =>
                            a.id === assignment.id
                              ? { ...a, completed: !a.completed }
                              : a
                          );
                          setAssignments(newAssignments);
                          localStorage.setItem(
                            "assignments",
                            JSON.stringify(newAssignments)
                          );
                        }}
                        className={`p-2 rounded-full shadow-lg shadow-violet-500/30 ${
                          assignment.completed
                            ? "bg-violet-500 hover:bg-violet-600"
                            : "bg-gray-600 hover:bg-gray-700"
                        }`}
                      >
                        <i className="fas fa-check"></i>
                      </button>
                      <button
                        onClick={() => {
                          const newAssignments = assignments.filter(
                            (a) => a.id !== assignment.id
                          );
                          setAssignments(newAssignments);
                          localStorage.setItem(
                            "assignments",
                            JSON.stringify(newAssignments)
                          );
                        }}
                        className="p-2 rounded-full bg-red-500 hover:bg-red-600 shadow-lg shadow-violet-500/30"
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              {assignments.length === 0 && (
                <p className="text-center text-gray-400 font-roboto">
                  No assignments yet
                </p>
              )}
            </div>
          </div>
          <div className="max-w-7xl mx-auto">
            <div className="bg-[#2d1b4d]/90 backdrop-blur-lg border border-violet-500/20 rounded-lg shadow-lg shadow-violet-500/20 overflow-x-auto">
              <div className="hidden md:grid grid-cols-11 gap-0">
                <div className="bg-transparent p-4"></div>
                {times.map((time) => (
                  <div
                    key={time}
                    className="bg-transparent p-4 text-center font-semibold font-roboto text-sm text-gray-300"
                  >
                    {displayTime(time)}
                  </div>
                ))}

                {days.map((day) => (
                  <React.Fragment key={day}>
                    <div
                      className={`border-violet-500/20 border p-2 text-sm font-roboto ${
                        day === selectedDay
                          ? "bg-violet-900/50 font-semibold text-violet-200"
                          : "text-gray-400"
                      }`}
                    >
                      {day}
                    </div>
                    {times.map((time) => (
                      <div
                        key={`${day}-${time}`}
                        className={`border-violet-500/20 border p-2 ${
                          day === selectedDay ? "bg-violet-900/20" : ""
                        }`}
                      >
                        {schedule
                          .filter((c) => c.day === day && c.time === time)
                          .map((class_) => (
                            <div
                              key={class_.id}
                              className="class-container relative overflow-hidden"
                              onTouchStart={() => {
                                const timer = setTimeout(
                                  () => handleLongPress(class_),
                                  500
                                );
                                return () => clearTimeout(timer);
                              }}
                            >
                              <div
                                style={{ backgroundColor: class_.color }}
                                className={`p-2 rounded text-white text-sm mb-1 transform transition-transform duration-300 backdrop-blur-sm border border-violet-500/20 ${
                                  currentClass?.id === class_.id
                                    ? "current-class"
                                    : ""
                                } hover:cursor-pointer class-content`}
                              >
                                <div className="font-bold font-roboto">
                                  {class_.name}
                                </div>
                                <div className="text-xs font-roboto">
                                  Room: {class_.room}
                                </div>
                              </div>
                              <button
                                onClick={() => {
                                  const newSchedule = schedule.filter(
                                    (c) => c.id !== class_.id
                                  );
                                  setSchedule(newSchedule);
                                  localStorage.setItem(
                                    "schedule",
                                    JSON.stringify(newSchedule)
                                  );
                                }}
                                className="absolute right-0 top-0 h-full bg-red-500 text-white px-3 transform translate-x-full transition-transform duration-300 delete-button flex items-center"
                              >
                                <i className="fas fa-trash"></i>
                              </button>
                            </div>
                          ))}
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
              <div className="md:hidden">
                <div className="grid grid-cols-2 gap-0">
                  <div className="bg-transparent p-2 text-sm font-semibold font-roboto text-gray-300">
                    Time
                  </div>
                  <div className="bg-transparent p-2 text-sm font-semibold font-roboto text-gray-300">
                    Class
                  </div>

                  {times.map((time) => {
                    const classesAtTime = schedule.filter(
                      (c) => c.day === selectedDay && c.time === time
                    );
                    return (
                      <React.Fragment key={time}>
                        <div className="border-violet-500/20 border p-2 text-sm text-gray-400 font-roboto">
                          {displayTime(time)}
                        </div>
                        <div className="border-violet-500/20 border p-2">
                          {classesAtTime.map((class_) => (
                            <div
                              key={class_.id}
                              onTouchStart={() => {
                                const timer = setTimeout(
                                  () => handleLongPress(class_),
                                  500
                                );
                                return () => clearTimeout(timer);
                              }}
                              onContextMenu={(e) => {
                                e.preventDefault();
                                handleLongPress(class_);
                              }}
                            >
                              <div
                                style={{ backgroundColor: class_.color }}
                                className={`p-2 rounded text-white text-sm mb-1 backdrop-blur-sm border border-violet-500/20 ${
                                  currentClass?.id === class_.id
                                    ? "current-class"
                                    : ""
                                } hover:cursor-pointer`}
                              >
                                <div className="font-bold font-roboto">
                                  {class_.name}
                                </div>
                                <div className="text-xs font-roboto">
                                  Room: {class_.room}
                                </div>
                              </div>
                              {currentClass?.id === class_.id && (
                                <div className="text-sm font-roboto mt-1">
                                  <div className="timer-container">
                                    <div
                                      className="timer-progress"
                                      style={{
                                        width: `${
                                          (remainingTime / (3600 * 1000)) * 100
                                        }%`,
                                      }}
                                    />
                                    <div className="timer-rabbit">🐰</div>
                                    <div className="timer-text">
                                      {Math.floor(remainingTime / 1000 / 60)}:
                                      {String(
                                        Math.floor((remainingTime / 1000) % 60)
                                      ).padStart(2, "0")}
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </React.Fragment>
                    );
                  })}
                </div>
                <div className="flex justify-center gap-2 p-4 border-t border-violet-500/20">
                  {days.map((day) => (
                    <button
                      key={day}
                      onClick={() => setSelectedDay(day)}
                      className={`px-3 py-1 rounded shadow-lg shadow-violet-500/30 ${
                        selectedDay === day
                          ? "bg-violet-500 text-white"
                          : "bg-[#333333] text-gray-300"
                      }`}
                    >
                      {day.slice(0, 3)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx global>{`
        .class-container:hover .class-content {
          transform: translateX(-40px);
          will-change: transform;
        }
        
        .class-container:hover .delete-button {
          transform: translateX(0);
          will-change: transform;
        }
        
        @keyframes progressBar {
          0% { width: 100%; }
          100% { width: 0%; }
        }
        
        @keyframes rabbitHop {
          0% { transform: translateX(0) translateY(0) scaleX(1); }
          25% { transform: translateX(25%) translateY(-15px) scaleX(1) rotate(-5deg); }
          49% { transform: translateX(calc(100% - 24px)) translateY(0) scaleX(1); }
          50% { transform: translateX(calc(100% - 24px)) translateY(0) scaleX(-1); }
          75% { transform: translateX(25%) translateY(-15px) scaleX(-1) rotate(5deg); }
          99% { transform: translateX(0) translateY(0) scaleX(-1); }
          100% { transform: translateX(0) translateY(0) scaleX(1); }
        }
        
        .timer-container {
          position: relative;
          width: 100%;
          height: 24px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3);
        }
        
        .timer-progress {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          background: linear-gradient(90deg, #8b5cf6 0%, #a78bfa 100%);
          transition: width 1s linear;
          box-shadow: 0 0 15px rgba(139, 92, 246, 0.5);
          will-change: width;
        }
        
        .timer-rabbit {
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          font-size: 20px;
          line-height: 1;
          animation: rabbitHop 2s ease-in-out infinite;
          z-index: 1;
          filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.7));
        }
        
        .timer-text {
          position: absolute;
          width: 100%;
          text-align: center;
          line-height: 24px;
          color: white;
          z-index: 2;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          font-weight: bold;
          letter-spacing: 1px;
        }
        
        .current-class {
          animation: glow 3s infinite;
          transition: all 0.3s ease;
          backdrop-filter: blur(4px);
          border: 1px solid rgba(139, 92, 246, 0.5);
          will-change: transform, box-shadow;
        }
        
        .current-class:hover {
          transform: scale(1.05);
          box-shadow: 0 0 40px rgba(139, 92, 246, 0.9);
        }
        
        .class-ended {
          animation: shake 0.5s ease-in-out;
          background-color: #EF4444 !important;
        }
        
        @keyframes glow {
          0% {
            box-shadow: 0 0 15px rgba(139, 92, 246, 0.7),
                        0 0 25px rgba(139, 92, 246, 0.5);
            transform: scale(1) translateZ(0);  
          }
          50% {
            box-shadow: 0 0 30px rgba(139, 92, 246, 0.9),
                        0 0 40px rgba(139, 92, 246, 0.7);
            transform: scale(1.03) translateZ(0);
          }
          100% {
            box-shadow: 0 0 15px rgba(139, 92, 246, 0.7),
                        0 0 25px rgba(139, 92, 246, 0.5); 
            transform: scale(1) translateZ(0);
          }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0) translateZ(0); }
          25% { transform: translateX(-5px) rotate(-2deg) translateZ(0); }
          75% { transform: translateX(5px) rotate(2deg) translateZ(0); }
        }
      `}</style>
      </div>
    </div>
  );
}

export default MainComponent;