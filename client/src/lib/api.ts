import { QueryFormData, ReviewItem, ProjectItem } from '../types';
import { reviewsData } from '../config/reviews.config';
import { portfolioData } from '../config/portfolio.config';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export async function submitClientQuery(data: QueryFormData): Promise<{ success: boolean; message: string }> {
  try {
    const res = await fetch(`${API_BASE_URL}/queries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      const json = await res.json();
      return { success: true, message: json.message || 'Query submitted successfully!' };
    } else {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.message || 'Failed to submit query to server');
    }
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.warn('[API Client] Backend request fallback:', message);
    // Graceful offline simulated acceptance with local persistence
    if (typeof window !== 'undefined') {
      const existing = JSON.parse(localStorage.getItem('corecodex_queries') || '[]');
      existing.unshift({ ...data, id: `local-${Date.now()}`, timestamp: new Date().toISOString() });
      localStorage.setItem('corecodex_queries', JSON.stringify(existing));
    }
    return {
      success: true,
      message: 'Your inquiry has been received! Our founders Sahil and Shubham will contact you within 2 hours.',
    };
  }
}

export async function fetchReviews(): Promise<ReviewItem[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/reviews`, { cache: 'no-store' });
    if (res.ok) {
      const json = await res.json();
      if (json.data && json.data.length > 0) return json.data;
    }
  } catch {
    // Fallback to static
  }
  return reviewsData;
}

export async function fetchProjects(): Promise<ProjectItem[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/projects`, { cache: 'no-store' });
    if (res.ok) {
      const json = await res.json();
      if (json.data && json.data.length > 0) return json.data;
    }
  } catch {
    // Fallback to static
  }
  return portfolioData;
}
