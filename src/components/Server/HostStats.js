import React, { useState, useEffect } from 'react';

const HostStats = () => {
    const [stats, setStats] = useState({
        cpuUsage: null,
        memoryInfo: null,
        networkUsage: null,
        batteryPercentage: null,
    });
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/host-stats')
            .then(response => response.json())
            .then(data => setStats(data))
            .catch(error => setError(error));
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>Host System Stats</h1>
            {stats.cpuUsage ? (
                <div>
                    <p><strong>CPU Usage:</strong> {stats.cpuUsage}%</p>
                    <p><strong>Memory Info:</strong> {JSON.stringify(stats.memoryInfo)}</p>
                    <p><strong>Network Usage:</strong> {JSON.stringify(stats.networkUsage)}</p>
                    <p><strong>Battery Percentage:</strong> {stats.batteryPercentage}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default HostStats;
