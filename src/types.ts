import type { ReactNode } from 'react';

export interface Device {
  id: string;
  name: string;
  icon: string;
  estimatedValue: string;
  repairRange: string;
  replacementCost: string;
}

export interface Issue {
  id: string;
  label: string;
  icon: string;
}

export interface Cause {
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high';
}

export interface GuidanceData {
  causes: Cause[];
  nextStep: string;
  repairConsiderations: string[];
  replaceConsiderations: string[];
}

export interface DeviceIssueMap {
  [deviceId: string]: {
    issues: Issue[];
    guidance: {
      [issueId: string]: GuidanceData;
    };
  };
}

export interface NavItem {
  label: string;
  href: string;
}

export interface RoadmapPhase {
  phase: string;
  title: string;
  description: string;
  isMvp?: boolean;
}

export interface FundingPoint {
  title: string;
  description: string;
  icon?: ReactNode;
}
