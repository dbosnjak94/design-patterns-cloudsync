// Common types for our CloudSync concept

export type FileType = 'document' | 'image' | 'video';
export type UserRole = 'viewer' | 'editor' | 'admin';
export type StorageType = 'local' | 'cloud' | 'hybrid';
export type SyncStatus = 'pending' | 'syncing' | 'completed' | 'failed';

export interface File {
  id: string;
  name: string;
  type: FileType;
  size: number;
  content?: string; // Mock content
  lastModified: Date;
  owner: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface Storage {
  type: StorageType;
  name: string;
  capacity: number;
  used: number;
}

export interface SyncOperation {
  id: string;
  status: SyncStatus;
  source: string;
  destination: string;
  files: File[];
  startTime: Date;
  endTime?: Date;
}

// Helper function to generate IDs
export function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}

// Helper function to simulate async operations
export function simulateDelay(ms: number = 1000): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Helper function for logging
export function log(pattern: string, message: string): void {
  console.log(`[${pattern}] ${message}`);
}