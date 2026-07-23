import { create } from 'zustand';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  storeId: string;
}

interface CartState {
  items: CartItem[];
  storeId: string | null;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  storeId: null,
  
  addItem: (item) => {
    set((state) => {
      // If adding from a different store, clear cart first
      if (state.storeId && state.storeId !== item.storeId) {
        return {
          items: [item],
          storeId: item.storeId
        };
      }
      
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        return {
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
          ),
          storeId: item.storeId
        };
      }
      
      return {
        items: [...state.items, item],
        storeId: item.storeId
      };
    });
  },
  
  removeItem: (id) => {
    set((state) => {
      const newItems = state.items.filter((i) => i.id !== id);
      return {
        items: newItems,
        storeId: newItems.length === 0 ? null : state.storeId
      };
    });
  },
  
  updateQuantity: (id, quantity) => {
    if (quantity <= 0) {
      get().removeItem(id);
      return;
    }
    
    set((state) => ({
      items: state.items.map((i) =>
        i.id === id ? { ...i, quantity } : i
      )
    }));
  },
  
  clearCart: () => set({ items: [], storeId: null }),
  
  getTotal: () => {
    return get().items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}));
