export function highway(startSpeed: number, changeSpeed: number, time1: number, time2: number): number {
    let totalTime: number = 0;
    totalTime = startSpeed * time1;
    totalTime += (startSpeed + changeSpeed) * time2;
  
    return totalTime / (time1 + time2);
  }
  