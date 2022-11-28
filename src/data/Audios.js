import audio1 from '../mp3s/1.mp3';
import audio2 from '../mp3s/2.mp3';
import audio3 from '../mp3s/3.mp3';
import audio4 from '../mp3s/4.mp3';
import audio5 from '../mp3s/5.mp3';
import audio6 from '../mp3s/6.mp3';
import audio7 from '../mp3s/7.mp3';
import audio8 from '../mp3s/8.mp3';
import audio9 from '../mp3s/9.mp3';
import audio10 from '../mp3s/10.mp3';
import audio11 from '../mp3s/11.mp3';
import audio12 from '../mp3s/12.mp3';
import audio13 from '../mp3s/13.mp3';

import audio101 from '../mp3s/101.mp3';
import audio102 from '../mp3s/102.mp3';
import audio103 from '../mp3s/103.mp3';

import surah001 from '../mp3s/Quran/001.mp3';
import surah018 from '../mp3s/Quran/018.mp3';
import surah032 from '../mp3s/Quran/032.mp3';
import surah036 from '../mp3s/Quran/036.mp3';
import surah055 from '../mp3s/Quran/055.mp3';
import surah067 from '../mp3s/Quran/067.mp3';
import surah078 from '../mp3s/Quran/078.mp3';

import { TimeToRadians } from '../scripts/Common';

export const Audios = [
    { id: 1, source: audio1, name: 'Bosnian Style by Eldin Huseinbegovic', isAzan: true, isFajrAzan: false, isAlarm: false },
    { id: 2, source: audio2, name: 'Dubai Style by Abdulrahman Al-Hindi', isAzan: true, isFajrAzan: false, isAlarm: false },
    { id: 3, source: audio3, name: 'Egyptian Style', isAzan: true, isFajrAzan: false, isAlarm: false },
    { id: 4, source: audio4, name: 'Heartwarming Azan Recitation', isAzan: true, isFajrAzan: false, isAlarm: false },
    { id: 5, source: audio5, name: 'Makkah Al-Mukarramah Style', isAzan: true, isFajrAzan: false, isAlarm: false },
    { id: 6, source: audio6, name: 'Masjid Al-Aqsa Style', isAzan: true, isFajrAzan: false, isAlarm: false },
    { id: 7, source: audio7, name: 'Mishary Al-Afasy', isAzan: true, isFajrAzan: false, isAlarm: false },
    { id: 8, source: audio8, name: 'Ottoman Style by Mawlana Shaykh Nazim', isAzan: true, isFajrAzan: false, isAlarm: false },
    { id: 9, source: audio9, name: 'Turkish Style by Remzi Er', isAzan: true, isFajrAzan: false, isAlarm: false },
    { id: 10, source: audio10, name: 'Fajr Azan by Mansoor Az-Zahrani', isAzan: false, isFajrAzan: true, isAlarm: false },
    { id: 11, source: audio11, name: 'Fajr Azan by Mishary Al-Afasy', isAzan: false, isFajrAzan: true, isAlarm: false },
    { id: 12, source: audio12, name: 'Madina Fajr Azan by Shaykh Surayhi', isAzan: false, isFajrAzan: true, isAlarm: false },
    { id: 13, source: audio13, name: 'Fajr Azan by Shaykh Ali Ahmed Mullah', isAzan: false, isFajrAzan: true, isAlarm: false },
    { id: 101, source: audio101, name: 'Bismillahirrahmanirrahim', isAzan: true, isFajrAzan: true, isAlarm: true },
    { id: 102, source: audio102, name: 'Soft Beep Sound', isAzan: true, isFajrAzan: true, isAlarm: true },
    { id: 103, source: audio103, name: 'As-Salatu Khayrun Minan Nawm', isAzan: false, isFajrAzan: false, isAlarm: true }
]

/* Surahs commonly recited after Salah */
export const QuranAudios = [
    { id: '001', source: surah001, name: 'Al-Fatihah', reciter: 'Mishary bin Rashid Alafasy' },
    { id: '018', source: surah018, name: 'Al-Kahf', reciter: 'Kamil Jaballah Alshani' },
    { id: '032', source: surah032, name: 'As-Sajda', reciter: 'Kamil Jaballah Alshani' },
    { id: '036', source: surah036, name: 'Ya-Sin', reciter: 'Shaykh Maher Al-Muaiqly' },
    { id: '055', source: surah055, name: 'Ar-Rahman', reciter: 'Shaykh Nazim Adil Al-Haqqani' },
    { id: '067', source: surah067, name: 'Al-Mulk', reciter: 'Mohammed Hashim Abdul Aziz' },
    { id: '078', source: surah078, name: 'An-Naba', reciter: 'Mohammed Bin Saleh Abu Zaid' }
]

export const Azans = Audios.filter(a => a.isAzan);
export const FajrAzans = Audios.filter(a => a.isFajrAzan);
export const AlarmAudios = Audios.filter(a => a.isAlarm);

export class AAA { /* Azan or Alarm Audio */
    constructor(id, time, isPlayed) {
        this.id = id;
        this.time = time;
        this.isPlayed = isPlayed;
    }
}

export class AlarmSetting {
    constructor(id, frequency, hour, minute, ap) {
        this.id = id
        this.hour = hour
        this.minute = minute
        this.ap = ap
        this.frequency = frequency
        this.time = (this.hour === '12' ? (this.ap === 'pm' ? 12 : 0) : ((this.ap === 'pm') ? this.hour * 1 + 12 : this.hour)) + ':' + this.minute
        this.angle = TimeToRadians(this.time, 24)
    }
}

export class NaflAlarmSetting {
    constructor(id, minutes, when, vakit) {
        this.id = id
        this.minutes = minutes
        this.when = when
        this.vakit = vakit
        this.time = null
        this.angle = null
    }
}
