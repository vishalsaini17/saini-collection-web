import { 
  collection, 
  doc, 
  setDoc, 
  deleteDoc, 
  onSnapshot, 
  writeBatch,
  addDoc,
  serverTimestamp,
  query,
  orderBy
} from 'firebase/firestore';
import { db } from './firebase';
import { Project, PartnerCompany, PROJECTS_DATA, COLLABORATING_COMPANIES } from '../data/portfolioData';

export interface Inquiry {
  id?: string;
  fullName: string;
  email: string;
  company?: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  details: string;
  status: 'new' | 'reviewed' | 'contacted' | 'archived';
  createdAt?: any;
}

// Subscribe to Projects with auto-seeding on first load
export function subscribeProjects(onProjectsChange: (projects: Project[]) => void) {
  const projectsRef = collection(db, 'projects');
  
  return onSnapshot(projectsRef, async (snapshot) => {
    if (snapshot.empty) {
      console.log('Firestore projects collection is empty. Seeding default projects...');
      try {
        const batch = writeBatch(db);
        PROJECTS_DATA.forEach((proj) => {
          const docRef = doc(db, 'projects', proj.id);
          batch.set(docRef, proj);
        });
        await batch.commit();
      } catch (err) {
        console.error('Error seeding projects to Firestore:', err);
      }
      onProjectsChange(PROJECTS_DATA);
    } else {
      const projectsList: Project[] = [];
      snapshot.forEach((docSnap) => {
        projectsList.push(docSnap.data() as Project);
      });
      onProjectsChange(projectsList);
    }
  }, (error) => {
    console.error('Error listening to Firestore projects:', error);
    onProjectsChange(PROJECTS_DATA);
  });
}

// Save or Update a Project in Firestore
export async function saveProjectToFirestore(project: Project): Promise<void> {
  try {
    const docRef = doc(db, 'projects', project.id);
    await setDoc(docRef, project, { merge: true });
  } catch (error) {
    console.error('Failed to save project to Firestore:', error);
    throw error;
  }
}

// Delete a Project from Firestore
export async function deleteProjectFromFirestore(projectId: string): Promise<void> {
  try {
    const docRef = doc(db, 'projects', projectId);
    await deleteDoc(docRef);
  } catch (error) {
    console.error('Failed to delete project from Firestore:', error);
    throw error;
  }
}

// Subscribe to Partner Companies with auto-seeding on first load
export function subscribeCompanies(onCompaniesChange: (companies: PartnerCompany[]) => void) {
  const companiesRef = collection(db, 'companies');

  return onSnapshot(companiesRef, async (snapshot) => {
    if (snapshot.empty) {
      console.log('Firestore companies collection is empty. Seeding default companies...');
      try {
        const batch = writeBatch(db);
        COLLABORATING_COMPANIES.forEach((comp) => {
          const docRef = doc(db, 'companies', comp.id);
          batch.set(docRef, comp);
        });
        await batch.commit();
      } catch (err) {
        console.error('Error seeding companies to Firestore:', err);
      }
      onCompaniesChange(COLLABORATING_COMPANIES);
    } else {
      const companiesList: PartnerCompany[] = [];
      snapshot.forEach((docSnap) => {
        companiesList.push(docSnap.data() as PartnerCompany);
      });
      onCompaniesChange(companiesList);
    }
  }, (error) => {
    console.error('Error listening to Firestore companies:', error);
    onCompaniesChange(COLLABORATING_COMPANIES);
  });
}

// Save or Update a Partner Company in Firestore
export async function saveCompanyToFirestore(company: PartnerCompany): Promise<void> {
  try {
    const docRef = doc(db, 'companies', company.id);
    await setDoc(docRef, company, { merge: true });
  } catch (error) {
    console.error('Failed to save company to Firestore:', error);
    throw error;
  }
}

// Delete a Partner Company from Firestore
export async function deleteCompanyFromFirestore(companyId: string): Promise<void> {
  try {
    const docRef = doc(db, 'companies', companyId);
    await deleteDoc(docRef);
  } catch (error) {
    console.error('Failed to delete company from Firestore:', error);
    throw error;
  }
}

// Submit a new RFP / Inquiry
export async function submitInquiryToFirestore(inquiryData: Omit<Inquiry, 'id' | 'status' | 'createdAt'>): Promise<string> {
  try {
    const docRef = await addDoc(collection(db, 'inquiries'), {
      ...inquiryData,
      status: 'new',
      createdAt: new Date().toISOString()
    });
    return docRef.id;
  } catch (error) {
    console.error('Failed to submit inquiry to Firestore:', error);
    throw error;
  }
}

// Subscribe to Inquiries for Admin view
export function subscribeInquiries(onInquiriesChange: (inquiries: Inquiry[]) => void) {
  const inquiriesRef = collection(db, 'inquiries');
  return onSnapshot(inquiriesRef, (snapshot) => {
    const list: Inquiry[] = [];
    snapshot.forEach((docSnap) => {
      list.push({ id: docSnap.id, ...docSnap.data() } as Inquiry);
    });
    onInquiriesChange(list);
  }, (error) => {
    console.error('Error listening to Firestore inquiries:', error);
    onInquiriesChange([]);
  });
}
