import { Injectable } from '@angular/core';
import { Landmark } from '../models/landmark/landmark.model';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class LandmarkService {

  url = `${environment.apiUrl}`;
  constructor() { }

  async getAllLandmarks(): Promise<Landmark[]> {
    try {
      const response = await fetch(`${this.url}/getAllLandmarks`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      return Array.isArray(data) ? data : [];

    } catch (error) {
      console.error('Error fetching landmarks:', error);
      return [];
    }
  }

  async getLandmarkByOrder(id: number): Promise<Landmark | undefined> {
    try {
      const response = await fetch(`${this.url}/getLandmarkByOrder?order=${id}`, { 
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      return data ?? undefined;

    } catch (error) {
      console.error(`Error fetching landmark with order ${id}:`, error);
      return undefined;
    }
  }

  async searchLandmarks(query: string): Promise<{ title: string }[]> {
    try {
      const response = await fetch(`${this.url}/searchLandmarks?q=${encodeURIComponent(query)}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      return Array.isArray(data) ? data : [];
    } catch (error) {
      console.error('Error searching landmarks:', error);
      return [];
    }
  }
  
}
